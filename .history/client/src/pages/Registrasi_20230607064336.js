import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registrasi() {
    const initialValues = {
        username: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(3).max(15).required(),
    });
    const onSubmit = (data) => {
        axios.post("http://localhost:3003/auth", data).then(() => {
            console.log(data);
            // navigate("/");
        });
    };
  return (
    <div>
        <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
        <Form className="formContainer">
            <label>Username: </label>
            <ErrorMessage name="username" component="span" />
            <Field
                id="inputCreatePost"
                name="username"
                placeholder="Ex. John123..."
            ></Field>
            <label>Password: </label>
            <ErrorMessage name="password" component="span" />
            <Field
                id="inputCreatePost"
                type
                name="password"
                placeholder="Your Password..."
            ></Field>
            <button type="submit">Register</button>
        </Form>
    </Formik>
  </div>
  )
}

export default Registrasi