import { useState } from 'react';

export default function PostContainer({post}){
    const [isShown, setIsShown] = useState(false);
    const [title, setNewTitle] = useState();
    const [content, setNewContent] = useState();
    const [tags, setNewTags] = useState();
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
            title,
            content,
            userId,
            tags_attributes: tags.split(',').map((el) => { return {name: el} })
        }

        fetch(`/post/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchedPost)
        })
        .then((r)=>r.json())
        .then((x) => console.log(x))
        window.location.reload();     
    }
    
    return(
    <div>
        <div>
        {isShown && (
            <div>
                <form className='update-form' onSubmit={handleSubmit}>
                    <label>Title</label><br/>
                    <textarea type='text'  placeholder={post.title} value={title} onChange={(e)=>setNewTitle(e.target.value)}></textarea><br/>
                    <label>Content</label><br/>
                    <textarea type='text'  placeholder={post.content} value={content} onChange={(e)=>setNewContent(e.target.value)}></textarea><br/>
                    <label>Tags</label><br/>
                    <textarea type='text' value={tags} onChange={(e)=>setNewTags(e.target.value)}></textarea><br/>
                    <button type='submit'>Update</button>
                    <button onClick={(e)=>{e.preventDefault(); setIsShown(false)}}>Cancel</button>
                </form>
            </div>
        )}
        </div><br/>
        <div className='postContainer'>
            <h1>{post.title}</h1>
            <p className="users-posts-content">{post.content}</p>
            <p>Tags: {post.tags.map((x)=> x.name).join(', ')}</p>
            <button onClick={handleUpdate}>Update</button> 
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    </div>
    )
}