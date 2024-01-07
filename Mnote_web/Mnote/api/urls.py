from django.contrib import admin 
from django.urls import path  , include
from api import views

urlpatterns = [
    
    path('' , views.getRoutes , name='routes'),
    path('note/' , views.getNotes , name='Notes'),
    path('note/<str:pk>' , views.getNote , name='Note'),
]