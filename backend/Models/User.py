from .Config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(256), unique=True)
    email = db.Column(db.String(80), unique=True)

    expenses = db.relationship('UserExpense', backref=db.backref('users', cascade='all, delete'))
    transactions = db.relationship('UserTransaction', backref=db.backref('user', cascade='all, delete'))

    def __init__(self, username, password, email) -> None:
        self.username = username
        self.password = password
        self.email = email