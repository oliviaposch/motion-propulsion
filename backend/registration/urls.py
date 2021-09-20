from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView, TokenObtainPairView
from registration.views import RegisterUser, ValidateUser, ResetPassword

app_name = 'registration'

urlpatterns = [
    path('registration/', RegisterUser.as_view(), name='registrate_new_user'),
    path('validation/', ValidateUser.as_view(), name='validate_credentials_new_user'),
    path('password-reset/', ResetPassword.as_view(), name='resend_user_passcode'),
    path('password-reset/validation/', ValidateUser.as_view(), name='reset_user_password'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='retrieve-refreshed-token'),
    path('token/verify/', TokenVerifyView.as_view(), name='verify-token'),
]
