from .Config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.Strin(80), unique=True)

    expenses = db.relationship('UserExpense', backref=db.backref('users', cascade='all, delete'))

    def __init__(self, username, password) -> None:
        self.username = username
        self.password = password