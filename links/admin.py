from django.contrib import admin
from .models import Link

@admin.register(Link)
class CompanyAdmin(admin.ModelAdmin):
  readonly_fields = ("uuid",)
  list_display = ["platform", "user"]