import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>Page Not Found:</h1>
        <h3>go to Home Pae: <Link to="/">Home Page</Link></h3>
    </div>
  )
}

export default PageNotFound