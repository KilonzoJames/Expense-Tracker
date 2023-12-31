from datetime import datetime

from sqlalchemy import DateTime
from .Config import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200))
    amount  = db.Column(db.Float)
    created_at = db.Column(DateTime, default=datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    serialize_rules = ('-users.expenses.users')

    users = db.relationship('UserExpense', backref=db.backref('expenses', cascade='all, delete'))

    def __init__(self, description, amount) -> None:
        self.description = description
        self.amount = amount