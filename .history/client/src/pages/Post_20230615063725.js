import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const {authState} = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3003/comments/${id}`).then((response) => {
      // console.log(response.data);
      setComments(response.data);
    });
  }, []);
  const addComment = () => {
    axios.post(`http://localhost:3003/comments`,
    {commentBody: newComment, PostId: id},{
      headers:{
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      if (response.data.error) {
        console.log(localStorage.getItem("accessToken"));
        alert(response.data.error);
      } else {
        const commentToAdd = {commentBody: newComment, username: response.data.username,}
        setComments([...comments, commentToAdd]);
      }
    })
  };

  co
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="title">{postObject.title}</div>
        <div className="postText">{postObject.postsText}</div>
        <div className="footer">{postObject.username}</div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input type="text" placeholder="Comment..." autoComplete="off" onChange={(event) => {setNewComment(event.target.value)}}/>
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComment">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
                <label> Username: {comment.username}</label>
                {authState.username === comment.username && <button onClick={deleteComment}>x</button>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
