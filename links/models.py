import uuid
from django.db import models
from django.core.validators import RegexValidator
from users.models import CustomUser
from .data import PLATFORMS, PLATFORM_REGEXES

class Link(models.Model):
  uuid = models.UUIDField(primary_key=True, default=uuid.uuid4)
  platform = models.CharField(max_length=255, choices=PLATFORMS)
  link_url = models.URLField(max_length=255)
  user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="links")

  def __str__(self):
    return self.platform
  
  # Validate the link_url field against the regex pattern
  def clean(self, *args, **kwargs):
      regex_pattern = PLATFORM_REGEXES.get(self.platform)
      validator_message = f'Invalid URL for {self.platform}'
      validator = RegexValidator(
          regex=regex_pattern,
          message=validator_message,
          code='invalid_platform_url'
      )
      validator(self.link_url)

      super().save(*args, **kwargs)
  
