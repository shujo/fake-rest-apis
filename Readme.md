# Fake Rest APIs

These APIs are not purely saved on the database.

#### Base URL

- http://localhost:3000/api/ or
- https://fake-rest-apis.herokuapp.com/api/

#### /auth/login (included jwt token w/ expiration)

```json
{
	"username": "user1",
	"password": "user1"
}
```

###### Success Response

```json
{
	"type": "success",
	"message": "Successfully logged-in",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE1ODQ4MzQ1NTEsImV4cCI6MTU4NDkyMDk1MX0.nyCo9Tg5_kBFcfuWku7rqJ6fxgvAT-YVy6X1cqafv78",
	"result": {
		"username": "user1",
		"email": "user1@gmail.com"
	}
}
```

###### Error Response

```json
{
	"type": "error",
	"message": "Invalid Username/Password"
}
```

#### /auth/register (included jwt token w/ expiration)

```json
{
	"id": 1,
	"username": "user1",
	"email": "user1@gmail.com",
	"password": "user1"
}
```

###### Success Response

```json
{
	"type": "success",
	"message": "Successfully register",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE1ODQ4MzQ1NTEsImV4cCI6MTU4NDkyMDk1MX0.nyCo9Tg5_kBFcfuWku7rqJ6fxgvAT-YVy6X1cqafv78",
	"result": {
		"id": 1,
		"username": "user1",
		"email": "user1@gmail.com"
	}
}
```

###### Error Response 1

```json
[
	{
		"type": "error",
		"message": "Missing Id"
	},
	{
		"type": "error",
		"message": "Missing Username"
	},
	{
		"type": "error",
		"message": "Missing Email"
	},
	{
		"type": "error",
		"message": "Missing Password"
	}
]
```

###### Error Response 2

```json
{
	"type": "error",
	"message": "Duplicate User!"
}
```
