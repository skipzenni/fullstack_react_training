import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let {id} = useParams();
  return (
    <div className='profile_page_container'>
        <div className='info'>
        {" "}
        <h1>Username: {}</h1>
        </div>
    </div>
    <div>Profile</div>
  )
}

export default Profile