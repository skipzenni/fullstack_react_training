import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Post() {
    let {id} = useParams();
    
  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
        console.log(response.data);
    });
  });
  return (
    <div>{id}</div>
  )
}

export default Post