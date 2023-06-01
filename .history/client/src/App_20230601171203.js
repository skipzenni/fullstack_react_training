import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Link to="/createpost"> Create A Post</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
