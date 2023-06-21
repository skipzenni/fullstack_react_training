import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let {id} = useParams();
    const [username, setUsername] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3003/auth/info/${id}`).then((response) => {
            setUsername(response.data.username);
        })
        axios.get(`http://localhost:3003/posts/by/${id}`).then((response) => {
            setUsername(response.data.username);
        })
    },[])
  return (
    <div className='profile_page_container'>
        <div className='info'>
        {" "}
        <h1>Username: {username}</h1>
        </div>
        <div className='list_of_post'></div>
    </div>
  )
}

export default Profile