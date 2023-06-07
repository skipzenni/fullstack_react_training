import React from 'react'

function Registrasi() {
    const initialValues = {
        username: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(3).max(15).required(),
    });
  return (
    <div><Formik
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
  </Formik></div>
  )
}

export default Registrasi