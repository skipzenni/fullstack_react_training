import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, []);
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="title">{postObject.title}</div>
        <div className="postText">{postObject.postsText}</div>
        <div className="footer">{postObject.username}</div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          
        </div>
        <div className="listOfComment">

        </div>
      </div>
    </div>
  );
}

export default Post;
