from rest_framework import serializers
from users.serializers import UserSerializer
from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        # read_only_fields = ['author', 'post']
