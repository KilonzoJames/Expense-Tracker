from flask import Flask, jsonify, request, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_restful import Api, Resource
from Models.WTFValidationForms.SignUpForm import SignUpForm
from Models.WTFValidationForms.LoginForm import LoginForm
from Models.User import User
from Models.Config import db


auth = Flask('auth', __name__)
api = Api(auth)

class SignUpResource(Resource):
    def post(self):
        form = SignUpForm()
        try:
            if form.validate_on_submit():
                email = request.form.get('email')
                username = request.form.get('username')
                password = request.form.get('password')

                hashed_password = generate_password_hash(password)
                newUser = User(username=username, password=hashed_password, email=email)

                db.session.add(newUser)
                db.session.commit()

                return jsonify({'status': 'Registration successful'})
            return jsonify({'error': form.errors}), 400
        except Exception as e:
                return jsonify({'error': str(e)}), 400

class Login(Resource):
    def post(self):
        form = LoginForm()

        if form.validate_on_submit():
            username = request.form.get('username')
            password = request.form.get('password')

            user = User.query.filter_by(username = username).first()
            if user and check_password_hash(user.password, password):
                session['user_id'] = user.id
                return jsonify({'status':'Authentication successful'})
            else:
                return jsonify({'error': 'Invalid username or password'}), 401
        return jsonify({'error':'invalid data'}), 400
    
class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({'message': '401: Not Authorized'}), 401
        
        
class Logout(Resource):
    def delete(self):
        # Remove 'user_id' from the session
        session.pop('user_id', None)  
        return {}, 204

api.add_resource(Logout, '/Logout')
api.add_resource(CheckSession, '/Check_session')
api.add_resource(Login, '/Login')
api.add_resource(SignUpResource, '/Signup')
