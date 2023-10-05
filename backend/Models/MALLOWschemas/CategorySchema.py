from app import ma
from Models.Category import Category

class UserSchema(app.ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Category