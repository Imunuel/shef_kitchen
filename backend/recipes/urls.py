from rest_framework.routers import DefaultRouter

from .views import RecipesList

router = DefaultRouter()

router.register(r'', RecipesList, basename='recipes_list')

user_patterns = [
                ] + router.urls

urlpatterns = user_patterns
