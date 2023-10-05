from app import ma
from Models.Transaction import Transaction

class TransactionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Transaction