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
    <div>Registrasi</div>
  )
}

export default Registrasi