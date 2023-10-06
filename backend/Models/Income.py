from datetime import datetime

from sqlalchemy import DateTime
from .Config import db

class Income(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200))
    amount  = db.Column(db.Float)
    created_at = db.Column(DateTime, default=datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __init__(self, description, amount) -> None:
        self.description = description
        self.amount = amount