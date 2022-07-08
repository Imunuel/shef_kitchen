from cairo import Status
from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .services import get_recipes_by_parameter, get_my_favorite_recipes, get_top_recipes
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

class StepDetail(mixins.RetrieveModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):

    def get_serializer_class(self):
        return StepSerializer
    
    def get_queryset(self):
        return Step.objects.all()
