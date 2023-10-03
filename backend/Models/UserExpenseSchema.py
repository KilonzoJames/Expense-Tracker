from ..app import ma
from Models.UserExpense import UserExpense

class UserSchema(ma.ModelSchema):
    class Meta:
        model = UserExpense