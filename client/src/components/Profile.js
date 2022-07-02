import { useEffect, useState } from 'react'
import PostContainer from './PostContainers'

export default function Profile({currentUser}){

    const [posts, setPosts] = useState()

    // To do!
    // Try to figure out a way to run useEffect again as soon as I update a post from PostContainer.jsx file.
    // Currently, PostContainer.jsx only passes single post so it creates an error with .map method on line 27.
    
     useEffect(() => {
        fetch(`/post/${currentUser.id}`)
        .then((r) =>{
          if(r.ok){
              r.json().then((posts)=>setPosts(posts))
          }
      })
    },[currentUser.id])
    
    return(
        <div>
            <h1>Hello {currentUser.username}</h1>
            <h3>What's on your mind today?</h3>
            <div className='postWrapper'>
                <h2>Your Posts</h2>
                <div className='postLists'>
                    {posts && posts?.map((post)=>{
                        return <PostContainer setPosts={setPosts} post={post} key={post.id} />
                    })}
                </div>
            </div>
        </div>
    )
}