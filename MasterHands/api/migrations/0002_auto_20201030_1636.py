# Generated by Django 3.1.2 on 2020-10-30 13:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='subcategory',
            new_name='category',
        ),
    ]