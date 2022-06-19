from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    owner = models.ForeignKey(to=User, on_delete=models.DO_NOTHING, related_name='owner')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    def __str__(self):
        return self.owner.username
