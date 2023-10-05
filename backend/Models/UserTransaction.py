from .Config import db

class UserTransaction():
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    transaction_id = db.Column(db.Integer, db.ForeignKey('transaction.id'))

    def __init__(self, user, transaction) -> None:
        self.user_id = user.id
        self.expense_id = transaction.id