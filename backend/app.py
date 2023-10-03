from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
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


db.init_app(app)
if __name__=='__main__':
    app.run(port=5555)