from django.shortcuts import render
from rest_framework import generics
from .models import Anime
from .serializers import AnimeSerializer

class AnimeList(generics.ListAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer

def health_check(request):
    # This hits the database just enough to keep Neon awake
    # without doing the heavy lifting of the full AnimeList view
    count = Anime.objects.count()
    return JsonResponse({
        "status": "online",
        "database": "active",
        "records": count    
    })