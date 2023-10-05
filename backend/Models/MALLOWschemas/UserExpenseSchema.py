from app import ma
from Models.UserExpense import UserExpense

class UserExpense(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserExpense