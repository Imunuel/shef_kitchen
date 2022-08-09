from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .services import get_recipes_by_parameter, get_my_favorite_recipes, get_top_recipes, get_recipe_by_id, \
    get_recipes_by_categories, get_my_recipes, delete_recipe_by_id, update_doc_after_like, update_doc_after_dislike, \
    update_add_to_favorite, update_remove_from_favorite
from .serializers import CreateRecipeSerializer, RecipePhotoSerializer


class RecipesList(mixins.CreateModelMixin, viewsets.GenericViewSet):

    def get_serializer_class(self):
        if self.action == "create_recipe":
            return CreateRecipeSerializer

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

    @action(methods=['GET', ], detail=False)
    def get_my_recipes(self, request):
        username = request.GET.get("username")
        data = get_my_recipes(username=username)
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['GET', ], detail=False)
    def delete_recipe_by_id(self, request):
        id = request.GET.get("id")
        if delete_recipe_by_id(id=id):
            return Response(data=id, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['POST', ], detail=False)
    def create_recipe(self, request):
        serializer = self.get_serializer_class()
        print(request.data)
        return Response(data=request.data, status=status.HTTP_200_OK)

    @action(methods=['GET', ], detail=False)
    def like(self, request):
        if update_doc_after_like(id=request.GET.get("id"), username=request.GET.get("username")):
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['GET', ], detail=False)
    def dislike(self, request):
        if update_doc_after_dislike(id=request.GET.get("id"), username=request.GET.get("username")):
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['GET', ], detail=False)
    def add_to_favorite(self, request):
        if update_add_to_favorite(id=request.GET.get("id"), username=request.GET.get("username")):
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['GET', ], detail=False)
    def remove_from_favorite(self, request):
        if update_remove_from_favorite(id=request.GET.get("id"), username=request.GET.get("username")):
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
