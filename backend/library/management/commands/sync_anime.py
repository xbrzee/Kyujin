import requests
from django.core.management.base import BaseCommand
from library.models import Anime

class Command(BaseCommand):
    help = 'Fetches trending anime from AniList and saves to Neon'

    def handle(self, *args, **kwargs):
     
        url = 'https://graphql.anilist.co'
        
        
        query = '''
        query {
          Page(perPage: 10) {
            media(sort: TRENDING_DESC, type: ANIME) {
              title { romaji }
              coverImage { large }
              description
              averageScore
            }
          }
        }
        '''
        
        self.stdout.write("Fetching from AniList...")
        response = requests.post(url, json={'query': query})
        
       
        if response.status_code == 200:
            data = response.json()['data']['Page']['media']
            
            for item in data:

                obj, created = Anime.objects.update_or_create(
                    title=item['title']['romaji'],
                    defaults={
                        'image_url': item['coverImage']['large'],
                        'description': item['description'][:500] if item['description'] else "",
                        'score': item['averageScore'] or 0
                    }
                )
                status = "Created" if created else "Updated"
                self.stdout.write(self.style.SUCCESS(f"{status}: {obj.title}"))
        else:
            self.stdout.write(self.style.ERROR("Failed to fetch data!"))