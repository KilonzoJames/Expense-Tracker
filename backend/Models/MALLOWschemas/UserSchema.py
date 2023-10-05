from app import ma
from Models.User import User

class UserSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User