from django.urls import re_path
from . import views

'''
Note use of re_path to catch manual changes to browser URL
react-router will habdle client side routing from within the browser window
'''
urlpatterns = [
  re_path(r'^app.*$', views.index, name="link_app")
]