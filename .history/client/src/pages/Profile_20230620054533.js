import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let {id} = useParams();
    const [username, setUsername] = useState("");
  return (
    <div className='profile_page_container'>
        <div className='info'>
        {" "}
        <h1>Username: {}</h1>
        </div>
        <div className='list_of_post'></div>
    </div>
  )
}

export default Profile