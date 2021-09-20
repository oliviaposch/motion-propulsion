from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from social.models import Post
from users.permissions import ObjNotLoggedInUser
from comments.models import Comment
from comments.serializers import CommentSerializer


class ListCreateComment(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.get(id=self.kwargs["post_id"]).post_comments

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        post = Post.objects.get(id=self.kwargs["post_id"])
        serializer.save(author=self.request.user, post=post)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ReadUpdateDeleteComment(RetrieveUpdateDestroyAPIView):
    """
    put:
    Updates and returns a comment based on the given id

    patch:
    Partially edits and returns a comment based on the given id

    delete:
    Deletes a comment based on the given id
    """

    queryset = Comment
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'post_id'
    permission_classes = [ObjNotLoggedInUser]
