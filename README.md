# Lesson 10

## Setting Server adding Username to Comment

tips turn off server when editing, drop table if addding more attribute
`cd server`
add username to comment, go to models/Comments.js

```javascript
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
```

go to AuthMiddleware.js add `req.user = validToken;` we need it to allow accessing data req
then we need to add our username while post data commento to routes/Comments.js.

```javascript
    const username = req.user.username;
    comment.username = username;
```

usage
on Post.js, we can show our username now

```javascript
  // to get comment from response and retrive on html
  const commentToAdd = {commentBody: newComment, username: response.data.username,}

  // to show username
  <label> Username: {comment.username}</label>
```

tips: in console we can do `sessionStorage.setItem("accessToken","asdasdas")`

change from session storage to local storage [post, app, login]

## Using Helpers to make header change when login

in client create src/helpers/AuthContext.js

```javascript
import { createContext } from "react";

export const AuthContext = createContext("");
```

usage on App.js

```javascript
// initialize the auth status
  const [authState, setAuthState] = useState(false);

// set auth to be true or false depending on localStorage
useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  });

// top and below `<Router>`
<AuthContext.Provider value={{ authState, setAuthState }}></AuthContext.Provider>
```

usage on pages/Login.js

```javascript
  // call auth status from AuthContext, it will automaticly import useContext on react, and AuthContext on helpers
  const {setAuthState} = useContext(AuthContext);

  // and place this in logic post login else not error response
  setAuthState(true)
```

## More secure with request using auth and set auth value to true

`cd server`
go to routes/User.js

```javascript
router.get('/auth',validateToken, (req,res) => {
    req.json(req.user)
})
```

App.js

```javascript
  // change from this
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  });

  // to this
  // this cample will not get response because we need valid toke to send while get data auth
  useEffect(() => {
    axios.get("http://localhost:3003/auth/auth").then((response) => {
      if (response.data.error) {
        setAuthState(false)
      } else {
        setAuthState(true)
      }
    })
  });

  // with this it will work and someone cant faking token authentication
  
  useEffect(() => {
    axios.get("http://localhost:3003/auth/auth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false)
      } else {
        setAuthState(true)
      }
    })
  });
```

now test to login, fake accessToken

See [Leason 11](https://lesson2.com) Preview for more details
