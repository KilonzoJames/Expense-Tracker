from app import ma
from Models.Category import Category

class UserSchema(ma.ModelSchema):
    class Meta:
        model = Category