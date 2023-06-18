import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>Page Not Found:</h1>
        <h3>o to Home Page: <Link to="/">Home Page</Link></h3>
    </div>
  )
}

export default PageNotFound