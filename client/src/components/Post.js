import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Post({currentUser}){
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[tags, setTags] = useState("");
    const user_id = currentUser.id
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const newPost = {
            title,
            content,
            tags,
            user_id
        }
        fetch(`/posts`, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(newPost),   
        }).then((r) => r.json())
        .then((p)=> console.log(p))


        // .then((r) => {
        //     if(r.ok){
        //         r.json().then(navigate('/profile'))
        //     }else{
        //         console.log(r.errors.full_messages)
        //         alert("New post creation failed.")
            // }
        // })
    }
    return(
        <div className="post-form-container">
            <form className="post-form" onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input 
                    className='title-input' 
                    type='text' 
                    onChange={(e) => setTitle(e.target.value)}  
                    value={title}>
                </input><br/>

                <label>Content</label><br/>
                <textarea 
                    className="content-input" 
                    type='text' 
                    onChange={(e) => setContent(e.target.value)}  
                    value={content} 
                    placeholder="Start typing~">
                </textarea><br/>

                <label>Tags: seperated by commas</label><br/>
                <input 
                    className="tags-input" 
                    type='text' 
                    onChange={(e) => setTags(e.target.value)} 
                    value={tags}>
                </input><br/>   

                <button className="post-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}