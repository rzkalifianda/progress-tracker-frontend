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
  
## Authentication

# AddUser (ADMIN HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/auth/admin/add-user  |
| METHOD      | POST  |
| Description | Endpoint used for adding user from CMS |

Request Header
```
Content-Type: application/json\
```

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
  data: [
    {
      _id : ObjectId,
      email : string,
      name : string,
      username : string,
    }
  ],
  message : "1  New user successfully registered.",
  token : generated with JWT middleware, use this for session and authenticate each time fetching,
}
```
<br/>

# Delete User (ADMIN HOME SCENE) *Dangerous

| A | B |
| ----------- | ------------- |
| FETCH       | api/auth/admin/delete-user/:userid |
| METHOD      | GET |
| Description | Feature's Endpoint used to delete a user and all of its relation |

Request Header
```
authorization : <token app get when login>
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "User and its relation has been deleted successfully!"
}
```
<br/>

# Login (USER LOGIN SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/auth/sign-in  |
| METHOD      | POST |
| Description | Endpoint used for login from user or admin |

Request Header
```
Content-Type: application/json
```

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
  data: [
    {
      _id : ObjectId,
      email : string,
      name : string,
      username : string,
    }
  ],
  message : "1 user found.",
  token : generated with JWT middleware, use this for session and authenticate each time fetching,
}
```
<br/>

## Pages

# AdminHome (ADMIN HOME SCENE)

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

# AdminTimeline (ADMIN TIMELINE SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/page/admin/timeline?filterBy=roles/projects&id=roleID/projectID |
| METHOD      | GET |
| Description | Endpoint used to display all of the timeline which are filtered by roles / projects |

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
  "success": boolean,
  "data": [
    {
      "reportdate": DATE eg."2019-10-04T17:00:00.000Z",
      "projectname": Array<projectName/roleName>
    },
    ...
  ],
  "message": "Successfully getting ADMIN TIMELINE data"
}
```
<br/>

# UserHome (USER HOME SCENE)

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

# ProjectsAndRoles (ADD REPORT DROPDOWN)

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

# User Report Detail (USER REPORT DETAIL)

| A | B |
| ----------- | ------------- |
| FETCH       | /api/page/report-detail?date=YYYY-MM-DD  |
| METHOD      | GET |
| Description | Endpoint used for getting all report detail from 1 user |

Request Header
```
Content-Type: application/json
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
  data : [
    {
      id: number,
      projectname: string,
      rolename: string,
      task: [
        {
          id: number,
          jobtitle: string,
          jobdesc: string,
          percentage: number,
          divisionid: number,
        },
        ...
      ]
    },
    ...
  ]
  message : "Successfully get user's reports"
}
```
<br/>


## Features

# Add Roles (ADMIN HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/admin/add-role |
| METHOD      | POST |
| Description | Feature's Endpoint used to add a role |

Request Header
```
Content-Type: application/json
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

# Delete a Role (ADMIN HOME SCENE) *Dangerous

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/admin/delete-role/:roleid |
| METHOD      | GET |
| Description | Feature's Endpoint used to delete a role and all of its relation |

Request Header
```
authorization : <token app get when login>
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "Role and its relation has been deleted successfully!"
}
```
<br/>

# Add Projects (ADMIN HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/admin/add-project |
| METHOD      | POST |
| Description | Feature's Endpoint used to add a project |

Request Header
```
Content-Type: application/json
authorization : <token app get when login>
```

Request Body JSON
```
{
  projectName : string,
}
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "1 New project successfully inserted."
}
```
<br/>

# Delete a Project (ADMIN HOME SCENE) *Dangerous

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/admin/delete-project/:projectid |
| METHOD      | GET |
| Description | Feature's Endpoint used to delete a project and all of its relation |

Request Header
```
authorization : <token app get when login>
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "Project and its relation has been deleted successfully!"
}
```
<br/>

# Add Reports (USER HOME SCENE)

| A | B |
| ----------- | ------------- |
| FETCH       | api/feature/add-report |
| METHOD      | POST |
| Description | Feature's Endpoint used to add a report |

Request Header
```
Content-Type: application/json
authorization : <token app get when login>
```

Request Body JSON
```
{
	"reportDate": date,
	"division": Array<Division>[
		{
			"projectName": string,
			"roleName": string,
			"task": Array<Task>[
				{
					"jobTitle": string,
					"jobDesc": string,	
					"progress": number
				},
        {
					"jobTitle": string,
					"jobDesc": string,	
					"progress": number
				},
        ...
			]
		},
		{
			"projectName": string,
			"roleName": string,
			"task": Array<Task>[
				{
					"jobTitle": string,
					"jobDesc": string,	
					"progress": number
				},
        ...
			]
		},
    ...
	]
}
```

Response Value
```
{
  success : boolean,
  data : [],
  message : "1 New report successfully inserted."
}
```
<br/>
