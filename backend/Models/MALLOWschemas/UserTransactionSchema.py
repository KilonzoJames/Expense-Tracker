from app import ma
from Models.UserTransaction import UserTransaction

class UserTransactionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserTransaction