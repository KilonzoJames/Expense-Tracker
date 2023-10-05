from app import ma
from Models.User import User

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User