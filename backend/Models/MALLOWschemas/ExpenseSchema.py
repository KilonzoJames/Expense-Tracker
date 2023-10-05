from app import ma

from Models.Expense import Expense

class ExpenseSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Expense