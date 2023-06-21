import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3003/auth/auth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      if (response.data.error) {
        setAuthState({...authState, status: false})
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        })
      }
    })
  },[]); // add [] cause it make auth request loop forever

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({username: "", id: 0, status: false});
    // navigate('/login');
  }
  return (
    <div className="App">
          <div className="navbar">
            <div className="link">
              {!authState.status ? (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/registrasi">Registrasi</Link>
                </>
              ) : (
                <>
                <Link to="/">Home</Link>
                <Link to="/createpost"> Create A Post</Link>
                </>
              )}
            </div>
            <div className="logout-container">
              <h4>{authState.username}   </h4>
              { authState.status && <button onClick={logout}>Logout</button>}
            </div>
          </div>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/createpost" exact Component={CreatePost} />
            <Route path="/post/:id" exact Component={Post} />
            <Route path="/login" exact Component={Login} />
            <Route path="/registrasi" exact Component={Registrasi} />
            <Route path="*" exact Component={PageNotFound} />
          </Routes>
  );
}

function Root() {
  return (
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <App />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default Root;
