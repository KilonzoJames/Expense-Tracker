from app import ma
from Models.User import User

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User