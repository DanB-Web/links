# Generated by Django 5.0.2 on 2024-03-02 21:33

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Link",
            fields=[
                (
                    "uuid",
                    models.UUIDField(
                        default=uuid.uuid4, primary_key=True, serialize=False
                    ),
                ),
                (
                    "platform",
                    models.CharField(
                        choices=[
                            ("github", "GitHub"),
                            ("facebook", "FaceBook"),
                            ("linkedin", "LinkedIn"),
                        ],
                        max_length=255,
                    ),
                ),
                ("link_url", models.URLField(max_length=255)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="links",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
