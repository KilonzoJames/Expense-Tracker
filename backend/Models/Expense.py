from datetime import datetime

from sqlalchemy import DateTime
from .Config import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descreption = db.Column(db.String(200))
    amount  = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    created_at = db.Column(DateTime, default=datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    users = db.relationship('UserExpense', backref=db.backref('expenses', cascade='all, delete'))

    def __init__(self, description, amount) -> None:
        self.descreption = description
        self.amount = amount