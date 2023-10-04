from .Config import db

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    # expenses = db.relationship('Expense', backref='category', lazy=True)

    def __init__(self, name) -> None:
        self.name = name