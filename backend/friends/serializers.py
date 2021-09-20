from rest_framework import serializers
from friends.models import Friend


class RequestFriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = '__all__'
        read_only_fields = ['receiver', 'sender']


"""
class AcceptAndRejectSerializer(serializers.ModelSerializer):

    friend_name = serializers.SerializerMethodField()
    sender_name = serializers.SerializerMethodField()

    @staticmethod
    def get_friend_name(obj):
        return obj.friend.username

    @staticmethod
    def get_sender_name(obj):
        return obj.sender.username

    class Meta:
        model = Friends
        fields = ['id', 'status', 'friend', 'friend_name', 'sender', 'sender_name']
"""


class AcceptAndRejectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = '__all__'
        read_only_fields = [
            'sender',
            'receiver'
        ]
