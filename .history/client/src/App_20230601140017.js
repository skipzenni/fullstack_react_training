
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/posts").then((response) => {
      console.log(response);
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="App">
      
        {listOfPosts.map((value, key) => {
          return (
            <div className="post">
              <div className="title">{value.title}</div>
              <div className="body">{value.postsText}</div>
              <div className="footer">{value.username}</div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
