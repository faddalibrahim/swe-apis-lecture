# NODE-MONGODB API

A TODO api created with node/express and mongodb

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

| route     | action                                  |
| --------- | --------------------------------------- |
| /todo/:id | update/patch todo with corresponding id |

**DELETE**

| route     | action                            |
| --------- | --------------------------------- |
| /todo/:id | delete todo with corresponding id |

## Packages & Setup

```js
npm init -y
npm i express
npm i --save-dev nodemon
npm i --save-dev dotenv
```
