from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.
### CreateAPIView is a generic view that allows us to create a new user, already built in the Django Rest Framework
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #To make sure we are not creating a user that already exists
    serializer_class = UserSerializer #Define the data we need to accept for a new user
    permission_classes = (AllowAny,) #Allow anyone to create a new user