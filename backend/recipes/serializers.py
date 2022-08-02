from rest_framework import serializers

from .models import RecipePhoto


class CreateRecipeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    photo = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    step_texts = serializers.ListField()
    step_files = serializers.ListField()


class RecipePhotoSerializer(serializers.Serializer):
    photo = serializers.ImageField(required=True)
