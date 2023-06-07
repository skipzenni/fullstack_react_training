import React, { useState } from 'react'

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { username: username, password: password};
        axios.post("http://localhost:3003/auth", data).then(() => {
            console.log(data);
            navigate("/");
        });
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