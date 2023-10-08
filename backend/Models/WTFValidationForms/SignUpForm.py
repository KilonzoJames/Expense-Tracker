from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Length, Email

class SignUpForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=4, max=80)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8, max=256)])
    email = StringField('Email', validators=[DataRequired(), Length(min=4, max=80)])
    
    class Meta:
        csrf = False
