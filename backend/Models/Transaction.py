from datetime import datetime

from sqlalchemy import DateTime
from .Config import db

class Transaction():
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200))
    amount  = db.Column(db.Float)
    action = db.Column(db.String)
    created_at = db.Column(DateTime, default=datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship('UserExpense', backref=db.backref('transactions', cascade='all, delete'))