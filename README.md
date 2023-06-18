# Lesson 12

## Material-ui.com to use icon on react

wee need to show liked post that user login has in routes post

Posts.js

```javascript

const { Posts,Likes } = require("../models");
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get("/", validateToken, async (req, res) => {
    const listOfPosts = await Posts.findAll({include: [Likes]})
    const likedPosts = await Likes.findAll({where: {UserId: req.user.id}});
    res.json({listOfPosts: listOfPosts, likedPosts: likedPosts});
})
```

At client side
https://mui.com/material-ui/getting-started/installation/
to use icon from material-ui.com we need to istall first

`npm install @mui/material @emotion/react @emotion/styled`

install meterial icon too

`npm install @mui/icons-material`

replace button like at Home.js before with this

Home.js

```javascript
<ThumbUpIcon
                onClick={() => {
                  LikeAPost(value.id);
                }} className={likedPosts.includes(value.id) ? "unlikeBtn" : "likeBtn"}
              />
```

App.css

```css
.likeBtn {
  color: rgba(250, 250, 250, 0.8);
}
.unlikeBtn {
  color: white;
}
```

## Retrive Posts and like post id

```javascript
  const [likedPosts, setLikedPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/posts", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setListOfPosts(response.data.listOfPosts);
        setLikedPosts(response.data.likedPosts.map((like)=>{
          return like.PostId;
        }));
        console.log(response.data.likedPosts);
      });
  }, []);
```

when button like is clicked is still passive, we need add some additional logic

```javascript
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => {
        return id != postId;
       })
      );
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
```

## Handle Page not found

Initiates page not found page
Home.js

```javascript
    import PageNotFound from "./pages/PageNotFound";
    <Route path="*" exact Component={PageNotFound} />
```

PageNotFound.js

```javascript
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>Page Not Found:</h1>
        <h3>Go to Home Page: <Link to="/">Home Page</Link></h3>
    </div>
  )
}

export default PageNotFound
```

See [Leason 14](https://lesson12.com) Preview for more details
