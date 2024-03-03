import re
from ninja import NinjaAPI
from ninja.security import django_auth
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from links.models import Link
from .schemas import LinkSchema, LinkCreateSchema, LinkUpdateSchema
from links.data import PLATFORMS, PLATFORM_REGEXES

# Global permissions for only authed users
api = NinjaAPI(auth=django_auth)

@api.get("/config")
def get_config(request):
    print(request.user.is_authenticated)
    return {'platforms': PLATFORMS, 'platform_regexes': PLATFORM_REGEXES}

@api.get("/links", response=list[LinkSchema])
def get_links(request):
    user = request.user
    return Link.objects.filter(user=user)

@api.get("/links/{uuid}", response=LinkSchema)
def get_link(request, uuid: str):
    user = request.user
    return get_object_or_404(Link, uuid=uuid, user=user)

@api.post("/links", response=LinkSchema)
def create_link(request, link: LinkCreateSchema):
    link_data = link.model_dump() # pydantic method to create dict from req body
    
    platform = link_data['platform']
    link_url = link_data['link_url']

    # Check platform is supported
    if not any(platform in platform_tuple for platform_tuple in PLATFORMS):
        return HttpResponse('Platform not supported', status=400)
    
    # Confirm platform url against platform regex
    regex = PLATFORM_REGEXES[platform]
    if not re.match(regex, link_url):
        return HttpResponse('Incorrect platform URL', status=400)
    
    # Create new instance associated with request user
    link_data['user'] = request.user
    link_instance = Link.objects.create(**link_data)

    return link_instance

@api.put("/links/{uuid}", response=LinkSchema)
def edit_link(request, uuid, link: LinkUpdateSchema):
    user = request.user
    link_data = link.model_dump()
    link_instance = get_object_or_404(Link, uuid=uuid, user=user)

    # Check platform is supported
    if 'platform' is not None and 'platorm' in link_data:
        value_in_list = any(link_data['platform'] in platform_tuple for platform_tuple in PLATFORMS)
        if not value_in_list:
            return HttpResponse('Platform not supported', status=400)

    # Confirm platform url against platform regex
    if 'link_url' is not None and 'link_url' in link_data:
        platform = link_instance.platform
        regex = PLATFORM_REGEXES[platform]
        if not re.match(regex, link_data['link_url']):
            return HttpResponse('Incorrect platform URL', status=400)
    
    # Update any values present on updated link
    # Note checking for None values (allowed on schema)
    for key, value in link_data.items():
        if value is not None:
            setattr(link_instance, key, value)
    
    link_instance.save()

    return link_instance

@api.delete("/links/{uuid}")
def delete_link(request, uuid: str):
    user = request.user
    link_instance = get_object_or_404(Link, uuid=uuid, user=user)
    link_instance.delete()
    return HttpResponse(status=204)