from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired

class ExpenseForm(FlaskForm):
    descreption = StringField('Descreption', validators=[DataRequired()])
    amount = FloatField('Amount', validators=[DataRequired()])