from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, RetrieveUpdateAPIView
from social.permissions import IsOwnerOrReadOnly
from users.permissions import ObjNotLoggedInUser
from users.serializers import UserSerializer, UserByIdSerializer
from rest_framework import filters

User = get_user_model()


class ListUsers(ListAPIView):
    """
    List all Users.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email']


class UserById(RetrieveUpdateAPIView):
    """
    User by id.

    serializer_class = UserSerializer
    lookup_url_kwarg = 'id_user'

    def get_queryset(self):
        id_user = self.kwargs.get("id_user")
        return User.objects.filter(id__user=id_user).order_by("-created")
    """
    queryset = User
    serializer_class = UserByIdSerializer
    lookup_url_kwarg = 'id_user'
    permission_classes = [ObjNotLoggedInUser]


class UserInfo(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self):
        return self.request.user

    def perform_update(self, serializer):
        serializer.save()
