import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/registrasi">Registrasi</Link>
        </div>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
          <Route path="/post/:id" exact Component={Post} />
          <Route path="/login" exact Component={Login} />
          <Route path="/registrasi" exact Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
