from flask import Flask, jsonify, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from Models.WTFValidationForms.LoginForm import LoginForm
from Models.WTFValidationForms.SignUpForm import SignUpForm
from werkzeug.security import check_password_hash, generate_password_hash
from Models.Category import Category
from Models.Expense import Expense
from Models.User import User
from Models.UserExpense import UserExpense

from Models.Config import db


app=Flask(__name__)
CORS(app)
ma = Marshmallow(app)

app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///Tracker.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

migrate =Migrate(app, db)

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


db.init_app(app)
if __name__=='__main__':
    app.run(port=5555)