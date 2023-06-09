from django.db import models
from django.contrib.auth.models import User

class Breed(models.Model):
    name = models.CharField(max_length=50)
    temperament = models.TextField()

    def __str__(self):
        return self.name

class Dog(models.Model):
    name = models.CharField(max_length=50)
    breed = models.ForeignKey(Breed, on_delete=models.SET_NULL, null=True)
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.name} ({self.breed.name})'