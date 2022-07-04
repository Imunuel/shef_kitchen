from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .services import getting_recipes
from .serializers import StepSerializer
from .models import Step


class RecipesList(viewsets.GenericViewSet):

    # def get_serializer_class(self):
    #     pass
    #
    # def get_queryset(self):
    #     pass

    @action(methods=['GET', ], detail=False)
    def get_recipes(self, request):
        parameter = request.GET.get('parameter')
        data = getting_recipes(parameter=parameter)
        return Response(data=data, status=status.HTTP_200_OK)


class StepDetail(mixins.RetrieveModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):

    def get_serializer_class(self):
        return StepSerializer
    
    def get_queryset(self):
        return Step.objects.all()
