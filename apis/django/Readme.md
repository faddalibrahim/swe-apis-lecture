# DJANGO-SQLITE3DB API

A TODO api created with python/django and sqlite3db

## Routes

**GET**

| route          | action                                |
| -------------- | ------------------------------------- |
| /task-list/    | fetch all todos                       |


**POST**

| route         | action        |
| ------------- | ------------- |
| /task-create/ | create a todo |

**PATCH**

| route                 | action                                 |
| --------------------- | ---------------------------------------|
| /task-update/<str:pk>/| update/patch todo with corresponding id|

**DELETE**

| route                  | action                            |
| ---------------------- | ----------------------------------|
| /task-delete/<str:pk>/ | delete todo with corresponding id |



## Packages & Setup

> pip install pipenv  
> pipenv shell  
> pip install django  
> django-admin startproject projectname
> pytho manage.py runserver

