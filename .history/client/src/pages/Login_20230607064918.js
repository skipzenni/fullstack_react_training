import React from 'react'

function Login() {
  return (
    <div>
        <input type='text' onChange={(event) => {
            setUserName(event.target.value);
        }}/>
        <input type='password' onChange={(event) => {
            setPass(event.target.value);
        }}/>
    </div>
  )
}

export default Login