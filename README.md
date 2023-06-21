# Lesson 15: Show Profile and Post User have, Adding UserId at Post Table, Modified POST post

## Show Profile

at backend we need to create a routes for show users profile in routes/Users.js

```javascript
router.get('/info/:id', async (req,res) => {
    const id = req.params.id;
    const basicInfo = await Users.findByPk(id, {
        attributes: {exclude: ["password"]},    
    });

    res.json(basicInfo)
})
```

Test it at postman : auth/info/1

Back to front end, create Profile.js

```javascript
// useParams use for get parameters id, useNavigate use for navigate to detail post when user click on it, useState object and variabel use for place to place responses we get in useEffect, useEffect use for rendering something inside it when page accessing, and map use to show data.
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
                        <div className='button'>
                            <label>{value.Likes.length}</label>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
  )
}

export default Profile
```

need to initialize page in App.js, so the page can be access

```javascript
  // import Profile page at top
  <Route path="/profile/:id" exact Component={Profile} />
```

## show post that user created in Profile page

At backend add UserId at Posts table, goto models/Users.js and add relationship that user has many posts

```javascript
    Users.associate = (models) => {
      Users.hasMany(models.Posts, {
        onDelete: 'cascade',
      });
      Users.hasMany(models.Likes, {
        onDelete: 'cascade',
      });
    };
```

create routes for get post that belong to id user at routes/Posts.js

```javascript
router.get("/byUserId/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await Posts.findAll({where: {
        UserId: id
    },include: [Likes]})
    res.json(listOfPosts);
})
```

try at `postman` : posts/byuserid/1

we have UserId at posts, we have route to get post by user, now we must modified post Posts to save not just username but with the user.id too, go to `backend` at `routes/Posts.js`

```javascript
router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    post.username = req.user.username;
    post.UserId = req.user.id;
    await Posts.create(post);
    res.json(post);
});
```

go to createpost and create post, but you must login first, after creating the post check if the username and id user fill correct at table posts.

Update App.css

```css
.likeBtn {
  color: rgba(250, 250, 250, 0.8);
}
.unlikeBtn {
  color: white;
}

.post {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: 1px solid lightgray;
  font-family: Arial, Helvetica, sans-serif;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.post:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
}
.post .title {
  flex: 20%;
  border-bottom: 1px solid lightgray;
  background-color: dodgerblue;
  display: grid;
  place-content: center;
  color: white;
}

.post .body {
  flex: 60%;
  display: grid;
  place-content: center;
}

.post .footer {
  flex: 20%;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: dodgerblue;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.footer .username {
  flex: 50%;
}
.footer .buttons {
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```

when request post now we have UserId, this UserId will use at Home.js.
Update Home.js, adding Link with UserId we create before

```javascript
            <div className="footer">
              <div className='username'>
                <Link to={`/profile/${value.UserId}`}>{value.username}</Link>
              </div>
              <div className='button'>
                <ThumbUpIcon
                  onClick={() => {
                    LikeAPost(value.id);
                  }} className={likedPosts.includes(value.id) ? "unlikeBtn" : "likeBtn"}
                />
                  <label>{value.Likes.length}</label>
              </div>
            </div>
```

try:

- refresh page
- create new post
- click on username

See [Leason 16](https://lesson16.com) Preview for more details
