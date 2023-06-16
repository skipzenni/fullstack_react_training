import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3003/auth/auth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false)
      } else {
        setAuthState(true)
      }
    })
  });

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState(
  }
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/createpost"> Create A Post</Link>
            {!authState ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/registrasi">Registrasi</Link>
              </>
            ) :(
              <button onClick={logout}>Logout</button>
            )
            }
          </div>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/createpost" exact Component={CreatePost} />
            <Route path="/post/:id" exact Component={Post} />
            <Route path="/login" exact Component={Login} />
            <Route path="/registrasi" exact Component={Registrasi} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
