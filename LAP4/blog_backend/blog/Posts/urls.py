from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='posts-home'),
    path('dogs/new/', views.create, name='dog-create'),
    path('dogs/<int:dog_id>/', views.show, name='dog-show')
]
