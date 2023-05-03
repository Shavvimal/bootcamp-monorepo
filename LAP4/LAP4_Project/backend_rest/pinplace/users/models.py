from django.db import models

# Create your models here.
# not utilised

class Users(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=30, blank=False)
    email = models.EmailField(max_length=75, unique=True, blank=False)
    # password = PasswordInput()
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Users"

    def __str__(self):
        return self.username