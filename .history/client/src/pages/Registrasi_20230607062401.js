import React from 'react'

function Registrasi() {
    const initialValues = {
        postsText: "",
        username: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
      title: Yup.string().required(),
      postsText: Yup.string().required(),
      username: Yup.string().min(3).max(15).required(),
    });
  return (
    <div>Registrasi</div>
  )
}

export default Registrasi