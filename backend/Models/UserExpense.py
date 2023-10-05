from .Config import db
from sqlalchemy_serializer import SerializerMixin

class UserExpense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    expense_id = db.Column(db.Integer, db.ForeignKey('expense.id'))

    def __init__(self, user, expense) -> None:
        self.user_id = user.id
        self.expense_id = expense.id