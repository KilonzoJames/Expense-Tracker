from datetime import datetime

from sqlalchemy import DateTime
from .Config import db

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200))
    amount  = db.Column(db.Float)
    timestamp = db.Column(db.String)
    created_at = db.Column(DateTime, default=datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship('UserTransaction', backref=db.backref('transactions', cascade='all, delete'))