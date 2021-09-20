from django.urls import path

from users.views import ListUsers, UserById, UserInfo

urlpatterns = [
    path('', ListUsers.as_view(), name='list-users'),
    path('me/', UserInfo.as_view(), name='user-info'),
    path('<int:id_user>/', UserById.as_view(), name='user-by-id'),
    path('?search=<str:search_string>', ListUsers.as_view(), name='list-users'),
]
