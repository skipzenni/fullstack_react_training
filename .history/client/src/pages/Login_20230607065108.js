import React from 'react'

function Login() {
    const state [username, setUserName] = useS
  return (
    <div>
        <input type='text' onChange={(event) => {
            setUserName(event.target.value);
        }}/>
        <input type='password' onChange={(event) => {
            setPassword(event.target.value);
        }}/>

        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login