from app import ma

from Models.Expense import Expense

class ExpenseSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Expense