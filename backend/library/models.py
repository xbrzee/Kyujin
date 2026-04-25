from django.db import models

class Anime(models.Model):
    title = models.CharField(max_length=255)
    image_url = models.URLField()
    description = models.TextField(blank=True, null=True)
    score = models.FloatField(default=0.0)
    def __str__(self):
        return self.title
    