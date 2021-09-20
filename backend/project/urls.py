from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

api_patterns = [
    path('users/', include('users.urls')),
    path('social/', include('social.urls')),
    path('social/', include('comments.urls')),
    path('social/', include('friends.urls')),
    path('auth/', include('registration.urls')),

    path('docs/', include_docs_urls(title='Django Template', schema_url='/', permission_classes=[])),

]


urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/', include(api_patterns)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
