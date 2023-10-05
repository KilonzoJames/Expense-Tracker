from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired

class IncomeForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
    amount = FloatField('amount', validators=[DataRequired()])

    class Meta:
        csrf = False