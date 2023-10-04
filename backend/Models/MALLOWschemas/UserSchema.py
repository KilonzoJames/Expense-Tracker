import sys
sys.path.append(r'/home/user/Moringa/Phase5/Expense-Tracker/backend')
import app

from Models.User import User

class UserSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User