import React from 'react'

function Login() {
  return (
    <div>
        <input type='text' onChange={(event) => {
            setUserName(event.target.value);
        }}/>
        <input type='password' onChange={(event) => {
            setPassword(event.target.value);
        }}/>

        <button onClick={}
    </div>
  )
}

export default Login