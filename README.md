# ProgressTracker
Tematik Big Assignment

### Comment/Notes
- [x] Finished (fetchable)
- [ ] Ongoing 

# Table

### Table Projects

| Name | Type | Description |
| ---- | ---- | ----------- |
| id  | int4 | Auto generated Serial by postgreSQL|
| projectname | text UNIQUE | The name of project that is running |

### Table Roles

| Name | Type | Description |
| ---- | ---- | ----------- |
| id  | int4 | Auto generated Serial by postgreSQL|
| rolename | text UNIQUE | The name of roles that is available |

### Table Users

| Name | Type | Description |
| ---- | ---- | ----------- |
| id  | int4 | Auto generated Serial by postgreSQL|
| email | string UNIQUE | For future purpose verification, forgot password, anti-spam | -> can change
| name | string | Name for Account identifier |
| username | string UNIQUE | username of account which has passed frontend verification |
| password | string | password of account which has passed frontend verification, Hash(password+salt) |

### Table Reports

| Name | Type | Description |
| ---- | ---- | ----------- |
| id  | int4 | Auto generated Serial by postgreSQL|
| reportDate | date | Date for indicate when is the daily report submitted and for checking whether this user already submit the daily report or not |
| userid | int4 | Foreign key from table users |

### Table Divisions

| Name | Type | Description |
| ---- | ---- | ----------- |
| id  | int4 | Auto generated Serial by postgreSQL|
| reportid | int4 | Foreign key from table reports |
| projectid | int4 | Foreign key from table projects |
| roleid | int4 | Foreign key from table roles |

### Table Tasks

| Name | Type | Description |
| ---- | ---- | ----------- |
| id  | int4 | Auto generated Serial by postgreSQL|
| jobtitle | text | The name of user's activity |
| jobdesc | text | Long detail of user's activity on one division |
| percentage | int2 | Foreign key from table projects |
| divisionid | int4 | Foreign key from table divisions |

<br/>
  
# Authentication

- [X] AddUser (ADMIN HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/auth/admin/add-user  |
| METHOD      | POST  |
| Description | Endpoint used for adding user from CMS |

Request Body
```
{
  email: string,
  name: string,
  username: string,
  password: string, *checked before go to server min. 6 char, etc.
}
```

Response Value
```
{
  success: boolean,
  data: {
    _id : ObjectId,
    email : string,
    name : string,
    username : string,
  },
  message : "1  New user successfully registered.",
  token : generated with JWT middleware, use this for session and authenticate each time fetching,
}
```
<br/>

- [X] Login (USER LOGIN SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/auth/sign-in  |
| METHOD      | POST |
| Description | Endpoint used for login from user or admin |

Request Body JSON
```
{
  username: string,
  password: string,
}
```

Response Value
```
{
  success: boolean,
  data: {
    _id : ObjectId,
    email : string,
    name : string,
    username : string,
  },
  message : "1 user found.",
  token : generated with JWT middleware, use this for session and authenticate each time fetching,
}
```
<br/>

# Pages

- [X] AdminHome (following only, for HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/page/admin/home |
| METHOD      | GET |
| Description | Endpoint used to display all of the projects, roles, and user on CMS |

Request Header
```
authorization : <token app get when login>
```

Request Body
```
-
```

Response Value
```
{
  success : boolean,
  data : {
    role : [
      {
        id : number,
        rolename : string,
      },
      ...
    ],
    project : [
      {
        id : number,
        projectname : string,
      },
      ...
    ],
    user : [
      {
        id : number,
        email : string,
        name :  string,
        username : string,
      },
      ...
    ],
  },
  message: "Successfully getting ADMIN HOME data"
}
```
<br/>

- [X] UserHome (USER HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/page/home  |
| METHOD      | GET |
| Description | Endpoint used to display all of this user report |

Request Header
```
authorization : <token app get when login>
```

Request Body JSON
```
-
```

Response Value
```
{
  success: boolean,
  data: [
    {
      id : number,
      reportdate : date *ex."2019-09-26T17:00:00.000Z",
      division : Array<Division>[
        {
          id : number,
          projectname : string,
          rolename : string,
          task : Array<Task>[
            {
              id : number,
              jobtitle : string,
              jobdesc : string,
              percentage : number,
              divisionid : number
            },
            ...
          ]
        },
        ...
      ]
    }
  ],
  message: "Successfully getting USER HOME data"
}
```
<br/>

- [X] ProjectsAndRoles (ADD REPORT DROPDOWN)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/page/project-role  |
| METHOD      | GET |
| Description | Endpoint used for getting all available projects and roles for adding report |

Request Header
```
authorization : <token app get when login>
```

Request Body JSON
```
-
```

Response Value
```
{
  success : boolean,
  data : {
    role : [
      {
        id : number,
        rolename : string,
      },
      ...
    ],
    project : [
      {
        id : number,
        projectname : string,
      },
      ...
    ],
  },
  message : "Successfully retrieve all of the user's posts"
}
```
<br/>


# Features

- [X] Add Role (ADMIN HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/admin/add-role |
| METHOD      | POST |
| Description | Feature's Endpoint used to add a post with multi-part form |

Request Header
```
Content-Type: multipart/form-data,
authorization : <token app get when login>
```

Request Body JSON
```
{
  roleName : string,
}
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "1 New role successfully inserted."
}
```
<br/>

- [X] Add Role (ADMIN HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/admin/add-role |
| METHOD      | POST |
| Description | Feature's Endpoint used to add a post with multi-part form |

Request Header
```
Content-Type: multipart/form-data,
authorization : <token app get when login>
```

Request Body JSON
```
{
  roleName : string,
}
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "1 New role successfully inserted."
}
```
<br/>
