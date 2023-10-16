from flask import Flask
from Models.Config import db
from flask_migrate import Migrate
from Models.User import User
from Models.Expense import Expense
from Models.UserExpense import UserExpense
from Models.Transaction import Transaction
from Models.Income import Income
from Models.UserTransaction import UserTransaction
from Models.UserIncome import UserIncome
from flask_sqlalchemy import SQLAlchemy

def create_app():
    app = Flask(__name__)

    # Database Configuration
    app.config['SECRET_KEY'] = 'cwicvecvuvuxvducvgvcuedgcvusvdcuvececdifuvhfu'
    app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///Tracker.db'
    db.init_app(app)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False    # Set the SQLAlchemy track modifications to False to suppress a warning
    app.config['WTF_CSRF_CHECK_DEFAULT']=False

    # Initialize the database
    db.init_app(app)

    # Initialize Flask-Migrate after initializing the db object
    migrate = Migrate(app, db)

    # Import your routes and models here (assuming Models.Config includes db)
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .app import app as main_blueprint
    app.register_blueprint(main_blueprint)

  # Include your models in the database
    with app.app_context():
        db.create_all()

    return app  # Return the configured Flask app
