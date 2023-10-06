from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired

class TransactionForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
    amount = FloatField('amount', validators=[DataRequired()])
    action = StringField('action', validators=[DataRequired()])

    class Meta:
        csrf = False