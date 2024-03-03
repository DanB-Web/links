from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import include, path
from api.api import api
from allauth.account.views import LoginView, SignupView, LogoutView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('login/', LoginView.as_view(success_url="/app"), name="account_login"),
    path('signup/', SignupView.as_view(success_url="/app"), name="account_signup"),
    path('logout/', LogoutView.as_view(redirect_field_name="marketing_page"), name="account_logout"),
    path("api/", api.urls),
    path("", include("app.urls")),
    path("", include('marketing.urls')),
]

if settings.DEBUG:
    urlpatterns += [
        path("__reload__/", include("django_browser_reload.urls")),
    ]
    # Add static urls
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    # Add media urls
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

