from django.contrib.auth import get_user_model
from rest_framework import serializers
from social.models import Post

User = get_user_model()


class UserByIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    logged_in_user_is_following = serializers.SerializerMethodField()
    amount_of_posts = serializers.SerializerMethodField()
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_followers = serializers.SerializerMethodField()
    amount_following = serializers.SerializerMethodField()
#    friends = serializers.SerializerMethodField()
    amount_friends = serializers.SerializerMethodField()

    def get_logged_in_user_is_following(self, user):
        return user in self.context['request'].user.following.all()

    def get_amount_of_posts(self, user):
        return Post.objects.filter(user=user).count()

    def get_amount_of_likes(self, user):
        return user.liked_posts.count()

    def get_amount_of_followers(self, user):
        return User.objects.filter(following=user).count()

    def get_amount_following(self, user):
        return user.following.count()

    # def get_friends(self, user):
    #    return UserByIdSerializer(user.friends, many=True).data

    def get_amount_friends(self, user):
        return len(user.friends)

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'location', 'about_me', "things_user_likes",
                  'logged_in_user_is_following', 'amount_of_posts', 'amount_of_posts', 'amount_of_likes',
                  'amount_of_followers', 'amount_following', "amount_friends", "job", "phone_number"]
        read_only_fields = ['email']
