import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Profile() {
    let {id} = useParams();
    
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3003/auth/info/${id}`).then((response) => {
            setUsername(response.data.username);
        })
        axios.get(`http://localhost:3003/posts/byuserid/${id}`).then((response) => {
            setListOfPosts(response.data);
        })
    },[])
  return (
    <div className='profile_page_container'>
        <div className='info'>
        {" "}
        <h1>Username: {username}</h1>
        </div>
        <div className='list_of_post'>
            
            {listOfPosts.map((value, key) => {
                return (
                <div className="post" key={value.id}>
                    <div className="title">{value.title}</div>
                    <div className="body" onClick={() => navigate(`post/${value.id}`)}>
                    {value.postsText}
                    </div>
                    <div className="footer">
                        <div className='username'>{value.username}</div>
                        <div c
                    <label>{value.Likes.length}</label>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
  )
}

export default Profile