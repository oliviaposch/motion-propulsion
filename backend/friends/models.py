from django.db import models
from django.conf import settings


class Friend(models.Model):
    sender = models.ForeignKey(to=settings.AUTH_USER_MODEL,  related_name='sender', on_delete=models.CASCADE)
    receiver = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='receiver', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=[('P', 'Pending'), ('A', 'Accepted'), ('R', 'Rejected')],
                              default='P')

    def __str__(self):
        return f'{self.sender} wants to add @{self.receiver} as a friend. Status: {self.status}'
