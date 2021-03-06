from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .services import get_recipes_by_parameter, get_my_favorite_recipes, get_top_recipes, get_recipe_by_id, get_recipes_by_categories
from .serializers import StepSerializer
from .models import Step


class RecipesList(viewsets.GenericViewSet):

    @action(methods=['GET', ], detail=False)
    def get_recipes(self, request):
        parameter = request.GET.get('parameter')
        data = get_recipes_by_parameter(parameter=parameter)
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['GET', ], detail=False)
    def get_favorite_recipes(self, request):
        username = request.GET.get("username")
        data = get_my_favorite_recipes(username=username)
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['GET', ], detail=False)
    def get_top_recipes(self, request):
        data = get_top_recipes()
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['GET', ], detail=False)
    def get_recipe_by_id(self, request):
        id = request.GET.get("id")
        data = get_recipe_by_id(id=id)
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['GET', ], detail=False)
    def get_recipes_by_categories(self, request):
        menu_type = request.GET.get("type")
        categories = request.GET.get("categories")
        data = get_recipes_by_categories(type=menu_type, categories=categories)
        return Response(data=data, status=status.HTTP_200_OK)


class StepDetail(mixins.RetrieveModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):

    def get_serializer_class(self):
        return StepSerializer

    def get_queryset(self):
        return Step.objects.all()
