import React, { useState } from 'react'

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { username: username, password: password}
    };

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