from app import ma
from Models.Income import Income

class IncomeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Income