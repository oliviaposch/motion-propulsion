from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models
from friends.models import Friend
from social.models import Post


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/username/<filename>
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username = models.CharField(verbose_name='username', max_length=200, unique=True)
    first_name = models.CharField(verbose_name='first name', max_length=200, blank=True)
    last_name = models.CharField(verbose_name='last name', max_length=200, blank=True)
    is_staff = models.BooleanField(verbose_name='staff status', default=False,
                                   help_text='Designates whether the user can log into this site.', )
    is_active = models.BooleanField(verbose_name='active', default=True,
                                    help_text='Designates whether this user should be treated as active. ''Unselect this instead of deleting accounts.')
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    location = models.CharField(verbose_name='user location', max_length=200, blank=True)
    about_me = models.CharField(verbose_name='user description', max_length=1000, blank=True)
    job = models.CharField(verbose_name='job title', max_length=200, blank=True)
    following = models.ManyToManyField(verbose_name='following', to=settings.AUTH_USER_MODEL, related_name='followers',
                                       blank=True, )
    liked_posts = models.ManyToManyField(verbose_name='liked posts', to=Post, related_name='liked_by', blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in "
                                         "the format: '+999999999'. Up to 15 "
                                         "digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17,
                                    blank=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True,
                               null=True)
    banner = models.ImageField(upload_to=user_directory_path, blank=True,
                               null=True)
    things_user_likes = models.CharField(max_length=300, blank=True)
    banner_position = models.IntegerField(verbose_name='banner position', default=50)

    @property
    def friends(self):
        friends_list = []

        requested = Friend.objects.filter(sender=self, status="A")

        for friend in requested:
            friends_list.append(friend.receiver)

        received = Friend.objects.filter(receiver=self, status="A")

        for friend in received:
            friends_list.append(friend.sender)

        return friends_list

    def __str__(self):
        return self.username

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username
