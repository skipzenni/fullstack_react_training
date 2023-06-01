import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let history = useHistory()
  useEffect(() => {
    axios.get("http://localhost:3003/posts").then((response) => {
      console.log(response);
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={value.id}>
            <div className="title">{value.title}</div>
            <div className="body">{value.postsText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;