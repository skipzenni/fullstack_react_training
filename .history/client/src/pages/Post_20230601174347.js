import React from 'react'
import { useParams } from 'react-router-dom';

function Post() {
    let {id} = useParams();
    
  useEffect(() => {
    axios.get("http://localhost:3003/posts/").then((response) => {
      console.log(response);
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div>{id}</div>
  )
}

export default Post