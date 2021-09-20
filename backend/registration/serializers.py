from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from registration.models import Registration

User = get_user_model()


class ValidationSerializer(serializers.ModelSerializer):

    def validate_passcode(self, value):
        email = self.initial_data['email']
        passcode = Registration.objects.get(user_id__email=email).passcode
        password_repeat = self.initial_data['password_repeat']
        code = self.initial_data['code']

        if value != password_repeat or code != passcode:
            raise serializers.ValidationError('Passwords not matching or incorrect code')
        else:
            return make_password(value)

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "username",
            "password"
        ]

        read_only_fields = ['email']
