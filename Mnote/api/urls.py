from django.contrib import admin 
from django.urls import path  , include
from api import views

urlpatterns = [
    
    path('' , views.getRoutes , name='index'),
]