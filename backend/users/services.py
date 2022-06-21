from django.contrib.auth.models import User


def create_user(data: dict):
    user = User.objects.create(**data)
    result = {
        'id': user.id,
        'username': user.username
    }
    return result


def update_user(data: dict):
    current_user = User.objects.get(username=data['username'])

    current_user.first_name = data['first_name']
    current_user.last_name = data['last_name']
    current_user.email = data['email']
    current_user.password = data['password']

    current_user.save()

    return True
