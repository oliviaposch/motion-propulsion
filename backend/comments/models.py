from django.db import models
from django.conf import settings
from social.models.posts import Post


class Comment(models.Model):
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, blank=False, related_name='post_comments')
    comment = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment from {self.author} on {self.post}'
