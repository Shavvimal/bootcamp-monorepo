# Generated by Django 3.2.7 on 2021-09-01 09:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shortener', '0002_rename_url_pair_urlpair'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='urlpair',
            name='short_url',
        ),
    ]