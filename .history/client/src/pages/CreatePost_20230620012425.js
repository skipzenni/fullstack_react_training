import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  let navigate = useNavigate();
  const initialValues = {
    title: "",
    postsText: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postsText: Yup.string().required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3003/posts", data).then((response) => {
      console.log("Its Work");
      navigate("/");
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
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
