from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
from . import views

urlpatterns = [
    path("v1/login/", jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("v1/login-refresh/", jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]