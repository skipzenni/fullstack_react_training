# Lesson 7

## Create Comments In Client

`cd client`

Go to Post.js

```bash
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3003/comments/${id}`).then((response) => {
      console.log(response.data);
      setComments(response.data);
    });
  }, []);
  const addComment = () => {
    axios.post(`http://localhost:3003/comments`,{commentBody: newComment, PostId: id}).then((response) => {
      const commentToAdd = {commentBody: newComment}
      setComments([...comments, commentToAdd]);
    })
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
          <input type="text" placeholder="Comment..." autoComplete="off" onChange={(event) => {setNewComment(event.target.value)}}/>
          <button onClick={addComment}>Add Comment</button>
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
```

some update css
App.css

```css
/* Comments */

.rightSide {
  flex: 50%;
  height: calc(100vh - 70px);
  display: grid;
  place-items: center;
  display: flex;
  flex-direction: column;
}

.rightSide .addCommentContainer {
  flex: 20%;
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 25px;
}

.addCommentContainer input,
button {
  width: 200px;
  height: 50px;
  border-radius: 8px;
  border: none;
}

.addCommentContainer button {
  background-color: dodgerblue;
  color: white;
}

.addCommentContainer input {
  border: 2px solid dodgerblue;
}

.rightSide .listOfComments {
  flex: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.listOfComments .comment {
  width: 70%;
  height: auto;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 20px;
}
```

See [Leason 8](https://lesson2.com) Preview for more details
