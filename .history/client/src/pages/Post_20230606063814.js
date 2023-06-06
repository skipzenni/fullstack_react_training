import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3003/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);
  const addComment = () => {
    axios.post(`http://localhost:3003/comments`,{commentBody:, PostId:})
  };
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="title">{postObject.title}</div>
        <div className="postText">{postObject.postsText}</div>
        <div className="footer">{postObject.username}</div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input type="text" placeholder="Comment..." autoComplete="off" onChange={(event) => {setNewComments(event.target.v)}}/>
          <button>Add Comment</button>
        </div>
        <div className="listOfComment">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
