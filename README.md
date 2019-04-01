# rest-api


## List of User Routes Endpoints :
|Route |HTTP |Header(s)|Body   |Description |
|------|:---:|:-------:|:-----|:-----------|
|`/api/users`|GET|`token(JWT)`|`none`|Get all the users info (Admin only)|
|`/api/users/:id`|GET|`token(JWT)`|`none`|Get a single user info (Admin and Authenticated user)|
|`/api/users`|POST |`token(JWT)`|`name:String`(**Required**) , `email:String`(**Required**), `password:String`(**Required**)| Create a user (Admin only)
|`/api/users/:id`|DELETE|`token(JWT)`|`none`| Delete a user (Admin only)
|`/api/users/:id`|PUT|`token(JWT)`|`name:String`(**Required**), `email:String`(**Required**),`password:String`(**Required**)| Update a user with new info (Admin and Authenticated user)|
|`/api/signin`|POST|`none`|`email:String`(**Required**)`,password:String`(**Required**)`|Sign in and get an access token based on credentials
|`/api/signout`|POST|`none`|`email:String`(**Required**)`,password:String`(**Required**)`|Sign up with a new user info

Access the API via [https://cherry-shortcake-11114.herokuapp.com](https://cherry-shortcake-11114.herokuapp.com).