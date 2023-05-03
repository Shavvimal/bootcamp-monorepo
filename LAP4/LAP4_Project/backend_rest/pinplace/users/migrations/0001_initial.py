# Generated by Django 3.2.7 on 2021-09-07 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=75, unique=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': 'Users',
            },
        ),
    ]