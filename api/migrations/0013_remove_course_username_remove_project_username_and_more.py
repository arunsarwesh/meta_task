# Generated by Django 5.1.4 on 2024-12-06 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_media_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='username',
        ),
        migrations.RemoveField(
            model_name='project',
            name='username',
        ),
        migrations.RemoveField(
            model_name='work',
            name='username',
        ),
        migrations.AddField(
            model_name='work',
            name='media',
            field=models.FileField(null=True, upload_to='proofs/'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='profile_photo',
            field=models.ImageField(default='profiles/default_profile.png', null=True, upload_to='profiles/'),
        ),
        migrations.AlterField(
            model_name='work',
            name='title',
            field=models.CharField(max_length=500),
        ),
        migrations.DeleteModel(
            name='Media',
        ),
    ]
