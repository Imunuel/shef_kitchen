# Generated by Django 3.2.11 on 2022-06-19 12:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='step',
            old_name='step_number',
            new_name='step_name',
        ),
    ]
