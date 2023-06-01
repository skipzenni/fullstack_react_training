# Lesson 4

## Manage page to another page using router-react-dom

`cd client`

istall command

`npm i react-router-dom`

Create folder pages and file CreatePost, Home inside the folder
Move some code from App.js to Home.js

App.js

```bash
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost"> Create A Post</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

```

Home.js

```bash
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/posts").then((response) => {
      console.log(response);
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={value.id}>
            <div className="title">{value.title}</div>
            <div className="body">{value.postsText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
```

CreatePosts.js

```bash
import React from "react";

function CreatePost() {
  return <div>CreatePost</div>;
}

export default CreatePost;
```

## Formik and Yup [Validation Form]

Create more efficient form with formik and validation the value with yup validation

```bash
npm i formik
npm i yup
```

CreatePost tobe like this after edited
CreatePost.js

```bash
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
  const initialValues = {
    title: "",
    postsText: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postsText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3003/posts", data).then((response) => {
      console.log('Its Work');
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="Ex. Title..."
          ></Field>
          <label>Post: </label>
          <ErrorMessage name="postsText" component="span" />
          <Field
            id="inputCreatePost"
            name="postsText"
            placeholder="Ex. Post..."
          ></Field>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Ex. John123..."
          ></Field>
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
```

App.css
`span{ color:red; }`

Try to submit some data and check them in home.

See [Leason 5](https://lesson2.com) Preview for more details
