from django.db import models
from django.contrib.auth.models import User


class RecipePhoto(models.Model):
    photo = models.ImageField(upload_to='recipes', blank=False, null=False)
