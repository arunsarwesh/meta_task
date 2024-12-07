# Generated by Django 5.1.4 on 2024-12-07 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_profile_about'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='username',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='uploaded_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='username',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='username',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='work',
            name='media',
            field=models.FileField(null=True, upload_to='proofs/'),
        ),
        migrations.AddField(
            model_name='work',
            name='username',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='latitude',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='longitude',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='profile_photo',
            field=models.ImageField(null=True, upload_to='profiles/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='proof',
            field=models.FileField(null=True, upload_to='projects/'),
        ),
    ]
