from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class UserRegistrationForm(UserCreationForm):
    class Meta:
        # form more info about what we are actually doing
        model = User
        fields = ['username', 'email', 'first_name',
                  'last_name', 'password1', 'password2']
