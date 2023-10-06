from app import ma
from Models.UserIncome import UserIncome

class UserIncomeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserIncome