from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from friends.serializers import RequestFriendSerializer, AcceptAndRejectSerializer
from users.serializers import UserSerializer
from friends.models import Friend
from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated
from friends.permissions import FriendRequestPermissions

User = get_user_model()


class ListAllFriends(ListAPIView):

    def get_queryset(self):
        return self.request.user.friends

    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class FriendRequest(CreateAPIView):
    queryset = Friend.objects.all()
    serializer_class = RequestFriendSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        receiver = User.objects.get(id=self.kwargs['id'])
        if receiver == self.request.user:
            return Response({"detail": "Users cannot do this operation with themselves."})
        else:
            if receiver in [elem.receiver for elem in Friend.objects.filter(receiver=receiver)] or \
                    self.request.user in [elem.receiver for elem in Friend.objects.filter(sender=receiver)]:
                return Response({"detail": "You can only make one request to an user!"})
            else:
                return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        receiver_id = self.kwargs['id']
        receiver = User.objects.get(id=receiver_id)
        serializer.save(receiver=receiver, sender=self.request.user)


"""
class PendingFriendRequests(ListAPIView):

    serializer_class = AcceptAndRejectSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Friends.objects.filter(Q(friend=user) | Q(sender=user))


class AcceptORRejectFriendRequest(RetrieveUpdateDestroyAPIView):

    queryset = Friends.objects.all()
    lookup_field = 'id'
    serializer_class = AcceptAndRejectSerializer

    def get_permissions(self):
        if self.request.method == 'GET' or self.request.method == 'DELETE':
            self.permission_classes = [IsRequesterOrReceiver]
        else:
            self.permission_classes = [IsReceiver]
        return super(AcceptORRejectFriendRequest, self).get_permissions()

    def patch(self, request, *args, **kwargs):
        if self.queryset.get(id=self.kwargs["id"]).status == 'P':
            if request.data['status'] == 'A':
                self.queryset.get(id=self.kwargs["id"]).friend.friends.add(
                    self.queryset.get(id=self.kwargs["id"]).sender)
                self.queryset.get(id=self.kwargs["id"]).friend.save()
            if request.data['status'] == 'R':
                self.queryset.get(id=self.kwargs["id"]).friend.rejected.add(
                    self.queryset.get(id=self.kwargs["id"]).sender)
                self.queryset.get(id=self.kwargs["id"]).friend.save()
            return self.partial_update(request, *args, **kwargs)
        else:
            return Response({"detail": "You can only change pending requests!"})
"""


class GetAcceptRejectFriends(RetrieveUpdateDestroyAPIView):
    """
    patch:
    Accept or reject a friend request
    Request ID must be passed in the URL. Body must contain status "R" or "A"

    delete:
    Cancel a friend request

    This only works for the sender of the friend request. Request ID to be passed in URL.
    """
    queryset = Friend.objects.all()
    lookup_url_kwarg = 'id'
    serializer_class = AcceptAndRejectSerializer
    permission_classes = [FriendRequestPermissions]


class ListPendingFriendRequests(ListAPIView):

    serializer_class = RequestFriendSerializer

    def get_queryset(self):
        user = self.request.user.id
        return Friend.objects.filter(Q(receiver=user) | Q(sender=user), status="P")
