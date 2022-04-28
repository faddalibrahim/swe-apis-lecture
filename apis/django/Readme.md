# DJANGO-SQLITE3DB API

A TODO api created with python/django and sqlite3db

## Routes

**GET**

| route      | action                                |
| ---------- | ------------------------------------- |
| /todos     | fetch all todos                       |
| /todos/:id | fetch one todo with the correspong id |

**POST**

| route         | action        |
| ------------- | ------------- |
| /todos/create | create a todo |

**PATCH**

| route      | action                                  |
| ---------- | --------------------------------------- |
| /todos/:id | update/patch todo with corresponding id |

**DELETE**

| route      | action                            |
| ---------- | --------------------------------- |
| /todos/:id | delete todo with corresponding id |


## Packages & Setup

> pip install pipenv  
> pipenv shell  
> pip install django  
> django-admin startproject projectname
> pytho manage.py runserver

