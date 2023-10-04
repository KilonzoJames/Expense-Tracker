from app import ma
from Models.UserExpense import UserExpense

class UserExpenseSchema(ma.ModelSchema):
    class Meta:
        model = UserExpense