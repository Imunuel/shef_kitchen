from rest_framework.routers import DefaultRouter

from .views import RecipesList, StepDetail

router = DefaultRouter()

router.register(r'', RecipesList, basename='recipes_list')
router.register(r'detail', StepDetail, basename='step')


user_patterns = [
                ] + router.urls

urlpatterns = user_patterns
