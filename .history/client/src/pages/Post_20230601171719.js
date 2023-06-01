import React from 'react'

function Post() {
    let {id} = useParams();
  return (
    <div>{id}</div>
  )
}

export default Post