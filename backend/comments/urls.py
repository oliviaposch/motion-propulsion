from django.urls import path, include
from comments.views import ListCreateComment, ReadUpdateDeleteComment

comment_patterns = [
    path('<int:post_id>/', ListCreateComment.as_view(), name='list-create-comment'),
    path('<int:post_id>/', ReadUpdateDeleteComment.as_view(), name='retrieve-update-destroy-comments'),

]

urlpatterns = [
    path('comments/', include(comment_patterns)),
]
