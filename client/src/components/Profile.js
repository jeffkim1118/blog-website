import { useEffect, useState } from 'react'
import PostContainer from './PostContainers'

export default function Profile({currentUser}){

    const [posts, setPosts] = useState([])
    
    function updatePost(postObj){
        const newPostArray = posts.map((post) => {
            if(post.id === postObj.id){
                return postObj
            }
            return post
        })
        setPosts(newPostArray)
    }
    
    function deletePost(postId){
        const newArray = posts.filter(post => post.id !== postId)
        setPosts(newArray)
    }

    const getPosts = () => {
        fetch(`/post/${currentUser.id}`)
        .then((r) =>{
          if(r.ok){
              r.json().then((posts)=>setPosts(posts))
          }
      })
    }
    
    useEffect(() => {
        getPosts()
    }, [])

    return(
        <div>
            <h1>Hello {currentUser.username}</h1>
            <h3>What's on your mind today?</h3>
            <div className='postWrapper'>
                <h2>Your Posts</h2>
                <div className='postLists'>
                    {posts && posts?.map((post)=>
                        <PostContainer  key={post.id} post={post} updatePost={updatePost} deletePost={deletePost} />
                    )}
                </div>
            </div>
        </div>
    )
}