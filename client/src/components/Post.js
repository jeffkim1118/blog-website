import { useState } from "react";

export default function Post({setPosts}){
    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')
    const[tags, setTags] = useState('')

    const newPost = {
        title : title,
        content : content,
        tags : tags
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/posts`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({newPost}),
        })
        .then((r) => r.json())
        .then((post) => setPosts(post))
    }

    return(
        <div>
            <form className="post-form">
                <label>Title</label><br/>
                <input className='title-input' type='text' onChange={setTitle}></input><br/>
                <label>Content</label><br/>
                <input className="content-input" type='text' onChange={setContent} placeholder="Start typing~"></input><br/>
                <label>Tags: seperated by commas</label><br/>
                <input className="tags-input" type='text' onChange={setTags}></input>
                
                <button className="post-btn" type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}