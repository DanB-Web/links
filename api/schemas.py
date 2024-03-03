from ninja import ModelSchema, Schema
from links.models import Link
from users.models import CustomUser

'''
Note that the schema parent class is different for existing models (ModelSchema)
and the request body for a new model instance (Schema)
'''

class CustomUserSchema(ModelSchema):
  class Meta:
    model = CustomUser
    fields = ('email', 'first_name', 'last_name', 'profile_image')


class LinkSchema(ModelSchema):
  # FK relationship
  user: CustomUserSchema

  class Meta:
    model = Link
    fields = ('uuid', 'platform', 'link_url', 'user')


class LinkCreateSchema(Schema):
  platform: str
  link_url: str

class LinkUpdateSchema(Schema):
  platform: str | None = None
  link_url: str | None = None