import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    
  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
        console.log(response.data);
    });
  });
  return (
    <div>{postObject.postText}</div>
  )
}

export default Post