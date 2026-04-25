from django.urls import path
from . import views

urlpatterns = [
    path('anime/', views.AnimeList.as_view(), name='anime-list'),
    path('health/', views.health_check, name='health-check'),
]


