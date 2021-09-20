from django.urls import path, include
from friends.views import ListAllFriends, FriendRequest, ListPendingFriendRequests, GetAcceptRejectFriends


friends_patterns = [
    path('', ListAllFriends.as_view(), name='list-all-friends'),
    path('request/<int:id>/', FriendRequest.as_view(), name='request-friend'),
    path('requests/', ListPendingFriendRequests.as_view(), name='see-pending-requests'),
    path('requests/<int:id>/', GetAcceptRejectFriends.as_view(), name='delete-change-request'),
]

urlpatterns = [
    path('friends/', include(friends_patterns)),
]
