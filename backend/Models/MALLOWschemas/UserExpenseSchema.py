from app import ma
from Models.UserExpense import UserExpense

class UserSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserExpense