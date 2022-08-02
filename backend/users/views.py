from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response

from django.contrib.auth.models import User

from .serializers import DefaultUserSerializer
from .services import create_user, update_user, check_user_exist


class UserAPI(mixins.CreateModelMixin, viewsets.GenericViewSet):

    def get_serializer_class(self):
        return DefaultUserSerializer

    def get_queryset(self):
        return User.objects.all()

    @action(methods=['GET', ], detail=False)
    def get_me(self, request):
        username = request.GET.get("username")
        serializer = self.get_serializer_class()
        current_user = User.objects.get(username=username)
        serialized_data = serializer(current_user).data
        return Response(data=serialized_data, status=status.HTTP_200_OK)

    @action(methods=['POST', ], detail=False)
    def create_user(self, request):
        serializer = self.get_serializer_class()
        serializer = serializer(request.data)
        user_data = create_user(data=serializer.data)
        return Response(data=user_data, status=status.HTTP_201_CREATED)

    @action(methods=['PUT', ], detail=False)
    def update_user(self, request):
        serializer = self.get_serializer_class()
        serializer = serializer(request.data)
        if update_user(data=serializer.data):
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['GET', ], detail=False)
    def login(self, request):
        username = request.GET.get("username")
        serializer = self.get_serializer_class()
        user = check_user_exist(username=username)
        if user:
            data = serializer(user).data
            return Response(data=data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
