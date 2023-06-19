# Lesson 14

## Fixing when refresh page redirect to login form

before

```javascript
// define variables
const { authState } = useContext(AuthContext);

// and we check !authState.status is false or not
!authState.status;
```

go to useEffect on Home.js and change from `!authState.status` to `!localStorage.getItem('accessTokens')`
add useEffect on CreatePost.js

```javascript
useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    navigate("/login");
  }
}, []);
```

## Write redirect to other page

define variables
`let navigate = useNavigate();`

usage
`navigate("/login");`

## Update App.js

```javascript
<div className="navbar">
  <div className="link">
    {!authState.status ? (
      <>
        <Link to="/login">Login</Link>
        <Link to="/registrasi">Registrasi</Link>
      </>
    ) : (
      <>
        <Link to="/">Home</Link>
        <Link to="/createpost"> Create A Post</Link>
      </>
    )}
  </div>
  <div className="logout-container">
    <h4>{authState.username} </h4>
    {authState.status && <button onClick={logout}>Logout</button>}
  </div>
</div>
```

App.css

```css
.navbar {
  width: 100%;
  height: 70px;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}
.navbar .links {
  flex: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar .logout-container {
  flex: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
}

.navbar button {
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-right: 10px;
  background-color: white;
}

.navbar h1 {
  text-align: right;
  margin-right: 10px;
  color: white;
  font-weight: lighter;
}
```

## Remove Username because now we can pass username from auth state

update posts add routes at back end routes/Posts.js

```javascript
router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  post.username = req.user.username;
  await Posts.create(post);
  res.json(post);
});
```

remove username field, yup, and variables from CreatePost.js

```javascript
const initialValues = {
  title: "",
  postsText: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  postsText: Yup.string().required(),
});

<Form className="formContainer">
  <label>Title: </label>
  <ErrorMessage name="title" component="span" />
  <Field id="inputCreatePost" name="title" placeholder="Ex. Title..."></Field>
  <label>Post: </label>
  <ErrorMessage name="postsText" component="span" />
  <Field
    id="inputCreatePost"
    name="postsText"
    placeholder="Ex. Post..."
  ></Field>
  <button type="submit">Create Post</button>
</Form>;

// add headers
const onSubmit = (data) => {
  axios
    .post("http://localhost:3003/posts", data, {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      navigate("/");
    });
};
```

## Delete Post user Owner

create routes for deleting a post ata routes/Posts.js

```javascript
// remember to import validateToken from middlware
router.delete("/:postId", validateToken, async (req, res) => {
  const postId = req.params.postId;

  await Posts.destroy({
    where: { id: postId },
  });

  res.json("Deleted Succes");
});
```

At Frontend Post.js

```javascript
// define variables and import package
const { authState } = useContext(AuthContext);
let navigate = useNavigate();

// show button delete if username same as post username at footer
{
  authState.username === postObject.username && (
    <button
      onClick={() => {
        deletePost(postObject.id);
      }}
    >
      Delete
    </button>
  );
}

// function for deleting a post, send headers and id then if successful redirect to home page
const deletePost = (id) => {
  axios
    .delete(`http://localhost:3003/posts/${id}`, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    })
    .then(() => {
      navigate("/");
    });
};
```

try:

- refresh page
- create new post
- delete post
- check if button show or not if u open other user post

See [Leason 15](https://lesson12.com) Preview for more details
