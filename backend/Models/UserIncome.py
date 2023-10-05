from .Config import db

class UserIncome():
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    income_id = db.Column(db.Integer, db.ForeignKey('income.id'))

    def __init__(self, user, income) -> None:
        self.user_id = user.id
        self.income_id = income.id