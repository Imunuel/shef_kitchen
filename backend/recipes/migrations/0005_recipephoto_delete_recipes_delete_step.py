# Generated by Django 4.0.4 on 2022-08-02 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0004_alter_step_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipePhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='recipes')),
            ],
        ),
        migrations.DeleteModel(
            name='Recipes',
        ),
        migrations.DeleteModel(
            name='Step',
        ),
    ]
