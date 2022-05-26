import { useEffect, useState } from 'react'
import PostContainer from './PostContainers'

export default function Profile({currentUser}){

    const [posts, setPosts] = useState([])

     useEffect(() => {
        fetch(`/posts/${currentUser.id}`)
        .then((r) =>{
          if(r.ok){
              r.json().then((posts)=>setPosts(posts))
          }
      })
    }, [])
    
    console.log(posts)
    return(
        <div>
            <h1>Hello {currentUser.username}</h1>
            <h3>What's on your mind today?</h3>

            <div className='postWrapper'>
                <h2>Your Posts</h2>
                <div className='postContainer'>
                    <PostContainer posts={posts} />
                    {/* {posts.map((posts)=>(
                        <PostContainer posts={posts} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}