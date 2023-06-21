import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let {id} = useParams();
  return (
    <div className='profile_page_controller'
    <div>Profile</div>
  )
}

export default Profile