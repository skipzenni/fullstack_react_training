import React from "react";

function CreatePost() {
  return <div>CreatePost</div>;
}

export default CreatePost;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    console.log(data);
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
