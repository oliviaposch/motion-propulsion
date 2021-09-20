from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from project.settings import DEFAULT_FROM_EMAIL
from registration.models import Registration
from registration.serializers import ValidationSerializer
from social.permissions import IsOwnerOrReadOnly

User = get_user_model()


class RegisterUser(CreateAPIView):
    permission_classes = []

    def create(self, request, *args, **kwargs):
        try:
            email = self.request.data['email']

            if not len(email):
                return Response({'Error': 'Email cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)
            elif User.objects.filter(email=email).exists():
                return Response({'Error': 'Email is already taken'}, status=status.HTTP_400_BAD_REQUEST)

            else:
                placeholder = f'{User.objects.latest("id").id + 1}'
                new_user = User(email=email, username=placeholder)
                new_user.save()
                temp_profile = Registration(user=new_user)
                temp_profile.save()
                send_mail(
                    'Welcome to Motion',
                    f'Here is your validation code: {temp_profile.passcode}',
                    DEFAULT_FROM_EMAIL,
                    [email],
                    fail_silently=False,
                )
                return Response(status=status.HTTP_200_OK)
        except KeyError:
            return Response({'email': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)


class ResetPassword(CreateAPIView):
    permission_classes = [IsOwnerOrReadOnly]

    def create(self, request, *args, **kwargs):

        email = self.request.data['email']
        if User.objects.filter(email=email).exists():
            temp_user = Registration.objects.get(user__email=email)
            temp_user.my_password_reset()
            temp_user.save()

            send_mail(
                'Resetting your Motion password',
                f'Here is your validation code: {temp_user.passcode}',
                DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class ValidateUser(UpdateAPIView):
    permission_classes = []
    serializer_class = ValidationSerializer

    def update(self, request, *args, **kwargs):
        email = self.request.data['email']
        temp_profile = Registration.objects.get(user__email=email)
        user_instance = User.objects.get(id=temp_profile.user_id)
        serializer = self.get_serializer(user_instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(status=status.HTTP_200_OK)
