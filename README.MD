## Backend

### How to run
```
1.virtualenv -p python3 venv (First time only)
2.source ./venv/bin/activate (for windows reverse path to \)
3.pip3 install -r requirements.txt
4.python3 manage.py createsuperuser (First time only)
5.python3 manage.py runserver 0.0.0.0:8000
```

### To see django database
```
http://localhost:8000/admin
```

### Create New APP
```
python manage.py startapp api apps/api

Create your super user
python manage.py createsuperuser
```