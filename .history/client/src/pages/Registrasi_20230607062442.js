import React from 'react'

function Registrasi() {
    const initialValues = {
        username: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(3).max(15).required(),
        : Yup.string().required(),
    });
  return (
    <div>Registrasi</div>
  )
}

export default Registrasi