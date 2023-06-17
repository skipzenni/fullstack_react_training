import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3003/posts").then((response) => {
      console.log(response);
      setListOfPosts(response.data);
    });
  }, []);

  const LikeAPost = (postId) => {
    axios.post("http://localhost:3003/likes", {PostId: postId}, {headers: { accessToken: localStorage.getItem("accessToken") }}
    ).then((response) =>{
      setListOfPosts(
        listOfPosts.map((post) =>{
          if (post.id === postId) {
            if (response.data.liked) {
              return {...post, id: post}
            } else {
              
            }
          } else {
            
          }
        })
      );
    });
  };
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="post"
            key={value.id}
          >
            <div className="title">{value.title}</div>
            <div className="body"
            onClick={() => navigate(`post/${value.id}`)}>{value.postsText}</div>
            <div className="footer">{value.username} {" "} 
            <button onClick={() =>{LikeAPost(value.id)}}>{" "}Like</button>
            <label>{value.Likes.length}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
