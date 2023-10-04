import sys
sys.path.append(r'/home/user/Moringa/Phase5/Expense-Tracker/backend')
import app

from Models.Expense import Expense

class ExpenseSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Expense