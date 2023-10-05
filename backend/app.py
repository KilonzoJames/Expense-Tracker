from flask import Flask, jsonify, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow import fields
from Models.WTFValidationForms import LoginForm
from Models.WTFValidationForms import SignUpForm
from Models.WTFValidationForms import ExpenseForm
from Models.MALLOWschemas import ExpenseSchema
from flask_wtf.csrf import generate_csrf
from werkzeug.security import check_password_hash, generate_password_hash
from Models.Expense import Expense
from Models.User import User
from Models.UserExpense import UserExpense

from Models.Config import db


app=Flask(__name__)
CORS(app)
ma = Marshmallow(app)

migrate = Migrate(app, db)

app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///Tracker.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SECRET_KEY'] = 'cwicvecvuvuxvducvgvcuedgcvusvdcuvececdifuvhfu'

class ExpenseSchema(ma.SQLAlchemyAutoSchema):
    users = fields.Nested('UserSchema', many=True, only=('id', 'username'))
    class Meta:
        model = Expense
        include_fk = True

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

@app.route('/get_csrf_token', methods=['GET'])
def get_csrf_token():
    csrf_token = generate_csrf()
    return jsonify({'csrf_token': csrf_token}), 200

def is_authenticated():
    return 'user_id' in session

@app.before_request
def check_authentication():
    if request.endpoint not in ('login', 'signup') and not is_authenticated():
        return jsonify({'error': 'Authentication required'}), 401

@app.route('/Login', methods=['POST'])
def signIn():
    form = LoginForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.query.filter_by(username = username).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.id
            return jsonify({'status':'Authentication successful'})
        else:
            return jsonify({'error': 'Invalid username or password'}), 401
    return jsonify({'error':'invalid data'}), 400

@app.route('/Signup', methods=['POST'])
def signUp():
    form = SignUpForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        hashed_password = generate_password_hash(password)
        newUser = User(username=username, password=hashed_password)

        db.session.add(newUser)
        db.session.commit()

        return jsonify({'status': 'Registration successful'})
    return jsonify({'error': form.errors}), 400

@app.route('/expenses', methods=['GET', 'POST'])
def get_Expenses():
    if request.method == 'GET':
        expenses = Expense.query.all()
        expenseSchema = ExpenseSchema(many=True)
        results = expenseSchema.dump(expenses)
        # results = expenses.to_dict()
        if not results:
            return jsonify({'message':'no expenses found'})
        return jsonify({'expense': results})
    if request.method == 'POST':
        try:
            form = ExpenseForm()
            if form.validate_on_submit():
                descreption = form.descreption.data
                amount = form.amount.data

                expense = Expense(description=descreption, amount=amount)
                db.session.add(expense)
                db.session.commit()

                user_id = session['user_id']
                user = User.query.get(user_id)

                userExpense = UserExpense(user=user, expense=expense)
                db.session.add(userExpense)
                db.session.commit()

                return jsonify({'message':'Expense added succesfully'}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 400

@app.route('/expense/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def get_expense(id):
    if request.method == 'GET':
        expense = Expense.query.get(id)
        if not expense:
            return jsonify({'Errors': 'Expense not found'})
        expenseSchema = ExpenseSchema()
        results = expenseSchema.dumps(expense)
        # results = expense.to_dict()
        # results = {
        #     'id': expense.id,
        #     'amount': expense.amount
        # }
        return jsonify({'expense': results})
    if request.method == 'PATCH':
        try:
            form = ExpenseForm()
            if form.validate_on_submit():
                descreption = form.descreption.data
                amount = form.amount.data

                expense = Expense.query.get(id)
                if descreption:
                    expense.descreption = descreption
                if amount:
                    expense.amount = amount
                db.session.add(expense)
                db.session.commit()
                return jsonify({'message': 'Expense updated successfully'})
        except Exception as e:
            return jsonify({'error': str(e)}), 400

    if request.method == 'DELETE':
        try:
            expense = Expense.query.get(id)
            if not expense:
                return jsonify({'error': 'Expense not found'}), 404

            db.session.delete(expense)
            db.session.commit()

            return jsonify({'message': 'Expense deleted successfully'})
        except Exception as e:
            return jsonify({'error': str(e)}), 400


db.init_app(app)
if __name__=='__main__':
    app.run(port=5555)