from django.conf import settings
from django.db import models


class Post(models.Model):
    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='posts',)

    title = models.TextField(verbose_name='title')
    content = models.TextField(verbose_name='content', blank=True)
    created = models.DateTimeField(verbose_name='created', auto_now_add=True,)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user}: {self.content[:50]} ..."
