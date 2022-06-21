from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response

from django.contrib.auth.models import User

from .serializers import CreateUserSerializer, UpdateUserSerializer
from .services import create_user, update_user


class UserAPI(viewsets.GenericViewSet):

    def get_serializer_class(self):
        if self.action == 'create_user':
            return CreateUserSerializer
        elif self.action == 'update_user':
            return UpdateUserSerializer

    def get_queryset(self):
        return User.objects.all()

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
