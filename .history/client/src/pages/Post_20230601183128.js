import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    
  useEffect(() => {
    axios.get(`http://localhost:3003/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
    });
  }, []);
  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='title'></div>
            <div className='postText'></div>
            <div className='footer'></div>
        </div>
        <
    </div>
    <div>{postObject.postsText}</div>
  )
}

export default Post