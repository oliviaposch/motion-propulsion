import random
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def code_generator():
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for x in range(5))


class Registration(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    passcode = models.CharField(max_length=5, default=code_generator)

    def my_password_reset(self):
        self.passcode = code_generator()
