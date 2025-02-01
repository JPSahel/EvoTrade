from django.urls import path
from . import views

urlpatterns = [
    path('portfolio/', views.get_portfolio, name='get_portfolio'),
    path('create-account/', views.create_account, name='create_account'),
    path('buy-asset/', views.buy_asset, name='buy_asset'),
    path('assess-risk/', views.assess_risk, name='assess_risk'),  # Add this line
]