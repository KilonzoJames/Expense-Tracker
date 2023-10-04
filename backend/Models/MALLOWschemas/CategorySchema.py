import sys
import app

sys.path.append('/home/user/Moringa/Phase5/Expense-Tracker/backend/')

from Models.Category import Category

class UserSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Category