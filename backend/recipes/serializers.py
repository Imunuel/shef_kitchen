from rest_framework import serializers

from .models import Recipes, Step


class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = (
            # 'step_name',
            # 'description',
            'image',
        )


class RecipesSerializer(serializers.ModelSerializer):
    steps = StepSerializer(many=True)

    class Meta:
        model = Recipes
        fields = (
            'name',
            'steps',
            'author'
        )
