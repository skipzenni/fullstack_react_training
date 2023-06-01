import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post() {
    let {id} = useParams();
    use [postObject, setPostObject] = useState();
    
  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
    });
  });
  return (
    <div>{postObject.post}</div>
  )
}

export default Post