from django.db import models
from django.contrib.auth.models import User


class Step(models.Model):
    step_name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(blank=True, upload_to='steps')

    def __str__(self):
        return self.step_name


class Recipes(models.Model):
    name = models.CharField(max_length=255)
    steps = models.ManyToManyField(to=Step)
    author = models.ForeignKey(to=User, on_delete=models.DO_NOTHING, related_name="recipes")

    def __str__(self):
        return f'{self.name} / {self.author.username}'
