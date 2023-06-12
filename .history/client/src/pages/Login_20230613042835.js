import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setAuthState} = useConte
  
  let navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3003/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        navigate("/");
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
