from rest_framework.routers import DefaultRouter

from .views import UserAPI

router = DefaultRouter()

router.register(r'actions', UserAPI, basename='user_create')

user_patterns = [
                ] + router.urls

urlpatterns = user_patterns
