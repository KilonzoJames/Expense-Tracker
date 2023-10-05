from flask import Flask, jsonify, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow import fields
from Models.WTFValidationForms.LoginForm import LoginForm
from Models.WTFValidationForms.SignUpForm import SignUpForm
from Models.WTFValidationForms.ExpenseForm import ExpenseForm
from Models.WTFValidationForms.TransactionForm import TransactionForm
from Models.WTFValidationForms.IncomeForm import IncomeForm
from flask_wtf.csrf import CSRFProtect
from werkzeug.security import check_password_hash, generate_password_hash
from Models.Expense import Expense
from Models.User import User
from Models.UserExpense import UserExpense
from Models.Transaction import Transaction
from Models.Income import Income
from Models.UserTransaction import UserTransaction
from Models.UserIncome import UserIncome

from Models.Config import db


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///Tracker.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SECRET_KEY'] = 'cwicvecvuvuxvducvgvcuedgcvusvdcuvececdifuvhfu'
app.config['WTF_CSRF_CHECK_DEFAULT']=False
CORS(app, origins=["http://localhost:5173"], methods=["GET", "POST"], supports_credentials=True)
ma = Marshmallow(app)

migrate = Migrate(app, db)



CSRFProtect(app)

class ExpenseSchema(ma.SQLAlchemyAutoSchema):
    users = fields.Method("get_users")
    class Meta:
        model = Expense
        include_fk = True

    def get_users(self, obj):
        user_expenses = obj.user
        users = [user_expense.users for user_expense in user_expenses]
        return UserSchema(many=True).dump(users)

class UserSchema(ma.SQLAlchemyAutoSchema):
    transactions = fields.Method('get_transactions')
    class Meta:
        model = User
        exclude = ('password', )

    def get_transactions(self, obj):
        user_transactions = obj.transactions
        transactions = [user_transaction.transactions for user_transaction in user_transactions]
        return UserSchema(many=True).dump(transactions)

class TransactionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Transaction


class IncomeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Income

def is_authenticated():
    return 'user_id' in session

@app.before_request
def check_authentication():
    exempt_routes = ['signIn', 'signUp']  # Add any other exempted routes here
    if request.endpoint and request.endpoint.lower() in exempt_routes:
        if not is_authenticated():
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
        if not results:
            return jsonify({'message':'no expenses found'})
        return jsonify({'expense': results})
    if request.method == 'POST':
        try:
            form = ExpenseForm()
            if form.validate_on_submit():
                description = form.description.data
                amount = form.amount.data

                expense = Expense(description=description, amount=amount)
                db.session.add(expense)
                db.session.commit()

                user_id = session['user_id']
                user = User.query.get(user_id)

                userExpense = UserExpense(user=user, expense=expense)
                db.session.add(userExpense)
                db.session.commit()

                return jsonify({'message':'Expense added succesfully'}), 201
            return jsonify({'message':form.description.data}), 400
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
            return jsonify({'message':'Error uploading expense'})
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

@app.route('/transactions', methods=['GET', 'POST', 'DELETE'])
def get_transactions():
    if request.method == 'GET':
        transactions = Transaction.query.all()
        expenseSchema = TransactionSchema(many=True)
        results = expenseSchema.dump(transactions)
        if not results:
            return jsonify({'message':'no expenses found'})
        return jsonify({'expense': results})
    if request.method == 'POST':
        try:
            form = TransactionForm()
            if form.validate_on_submit():
                description = form.description.data
                amount = form.amount.data
                action = form.action.data

                transaction = Transaction(description=description, amount=amount, action=action)
                db.session.add(transaction)
                db.session.commit()

                user_id = session['user_id']
                user = User.query.get(user_id)

                userTransaction = UserTransaction(user=user, transaction=transaction)
                db.session.add(userTransaction)
                db.session.commit()

                return jsonify({'message':'Transaction added succesfully'}), 201
            return jsonify({'message':form.description.data}), 400
        except Exception as e:
            return jsonify({'error': str(e)}), 400

@app.route('/transaction/<int:id>', methods=['GET','POST'])
def get_transaction(id):
    if request.method == 'GET':
        transaction = Transaction.query.get(id)
        if not transaction:
            return jsonify({'Error': 'transaction not found'})
        expenseSchema = ExpenseSchema()
        results = expenseSchema.dumps(transaction)

        return jsonify({'transaction': results})
    if request.method == 'DELETE':
        try:
            transaction = Transaction.query.get(id)
            if not transaction:
                return jsonify({'error': 'Transaction not found'}), 404

            db.session.delete(transaction)
            db.session.commit()

            return jsonify({'message': 'transaction deleted successfully'})
        except Exception as e:
            return jsonify({'error': str(e)}), 400

@app.route('/incomes', methods=['GET', 'POST'])
def get_incomes():
    if request.method == 'GET':
        incomes = Income.query.all()
        incomSchema = IncomeSchema(many=True)
        results = incomSchema.dump(incomes)
        if not results:
            return jsonify({'message':'no income streams found'})
        return jsonify({'incomes': results})

    if request.method == 'POST':
        try:
            form = IncomeForm()
            if form.validate_on_submit():
                description = form.description.data
                amount = form.amount.data

                income = Income(description=description, amount=amount)
                db.session.add(income)
                db.session.commit()

                user_id = session['user_id']
                user = User.query.get(user_id)

                userIncome = UserIncome(user=user, income=income)
                db.session.add(userIncome)
                db.session.commit()

                return jsonify({'message':'Income added succesfully'}), 201
            return jsonify({'message': 'validations error'}), 400
        except Exception as e:
            return jsonify({'error': str(e)}), 400


db.init_app(app)
if __name__=='__main__':
    app.run(port=5555)