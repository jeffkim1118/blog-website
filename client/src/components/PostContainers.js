import { useState } from 'react';

export default function PostContainer({post}){
    const [isShown, setIsShown] = useState(false);
    const [newTitle, setNewTitle] = useState();
    const [newContent, setNewContent] = useState();
    const [newTags, setNewTags] = useState();
    const userId = post.user_id

    function handleDelete(){
        fetch(`/post/${post.id}`,{
            method: "DELETE",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then((r) => r.json())
        .then(console.log("Post Removed"))
        window.location.reload();
    }

    // Display update component
    const handleUpdate = (e) =>{
        e.preventDefault();
        setIsShown(current => !current)
    }
    // Send patch requests
    function handleSubmit(e){
        e.preventDefault();
        const patchedPost = {
            newTitle,
            newContent,
            newTags,
            userId
        }

        fetch(`/post/${post.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(patchedPost)
        })
        .then((r)=>r.json())
        
    }

    
    return(
    <div>
        <div>
        {isShown && (
            <div>
                <form className='update-form' onSubmit={handleSubmit}>
                    <textarea type='text' defaultValue={post.title} value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}></textarea><br/>
                    <textarea type='text' defaultValue={post.content} value={newContent} onChange={(e)=>setNewContent(e.target.value)}></textarea><br/>
                    <textarea type='text' defaultValue={post.tags} value={newTags} onChange={(e)=>setNewTags(e.target.value)}></textarea><br/>
                    <button type='submit'>Update</button>
                    <button>Cancel</button>
                </form>
            </div>
        )}
        </div><br/>
        <div className='postContainer'>
            <h1>{post.title}</h1>
            <p className="users-posts-content">{post.content}</p>
            <p>{post.tags}</p>
            <button onClick={handleUpdate}>Update</button> 
            <button onClick={handleDelete}>Delete Post</button>
        </div>

    </div>
    )
}