from .Config import db

class UserTransaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    transaction_id = db.Column(db.Integer, db.ForeignKey('transaction.id'))

    def __init__(self, user, transaction) -> None:
        self.user_id = user.id
        self.transaction_id = transaction.id