from ...app import ma
from Models.Expense import Expense

class ExpenseSchema(ma.ModelSchema):
    class Meta:
        model = Expense