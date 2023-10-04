import sys
sys.path.append(r'/home/user/Moringa/Phase5/Expense-Tracker/backend')
import app

from Models.UserExpense import UserExpense

class UserSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserExpense