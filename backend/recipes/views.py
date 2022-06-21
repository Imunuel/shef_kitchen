from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action

from .serializers import RecipesSerializer
from .models import Recipes


class RecipesList(mixins.ListModelMixin,viewsets.GenericViewSet):

    def get_serializer_class(self):
        return RecipesSerializer

    def get_queryset(self):
        return Recipes.objects.all()
