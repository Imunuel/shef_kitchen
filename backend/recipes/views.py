from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response

from elastic.services import getting_recipes


class RecipesList(viewsets.GenericViewSet):

    # def get_serializer_class(self):
    #     pass
    #
    # def get_queryset(self):
    #     pass

    @action(methods=['GET', ], detail=True)
    def get_recipes(self, request):
        parameter = request.GET.get('parameter')
        data = getting_recipes(parameter=parameter)
        return Response(data=data, status=status.HTTP_200_OK)
