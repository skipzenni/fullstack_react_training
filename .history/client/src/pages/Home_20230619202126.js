import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { AuthContext } from "../helpers/AuthContext";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const {authState} = useContext(AuthContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (condition) {
      
    } else {
      
    }
    axios
      .get("http://localhost:3003/posts", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setListOfPosts(response.data.listOfPosts);
        setLikedPosts(response.data.likedPosts.map((like)=>{
          return like.PostId;
        }));
        console.log(response.data.likedPosts);
      });
  }, []);

  const LikeAPost = (postId) => {
    axios
      .post(
        "http://localhost:3003/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        setListOfPosts(
          listOfPosts.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );
      });

    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => {
        return id != postId;
       })
      );
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={value.id}>
            <div className="title">{value.title}</div>
            <div className="body" onClick={() => navigate(`post/${value.id}`)}>
              {value.postsText}
            </div>
            <div className="footer">
              {value.username}{" "}
              <ThumbUpIcon
                onClick={() => {
                  LikeAPost(value.id);
                }} className={likedPosts.includes(value.id) ? "unlikeBtn" : "likeBtn"}
              />
              <label>{value.Likes.length}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
