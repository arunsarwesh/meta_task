# Generated by Django 5.1.4 on 2024-12-06 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_remove_work_media_alter_work_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='file',
            field=models.FileField(upload_to='proofs/'),
        ),
    ]