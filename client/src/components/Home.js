import { useEffect, useState } from "react"
import {Link, useNavigate} from 'react-router-dom';

export default function Home({currentUser}){
    const[allPosts, setAllPosts] = useState();
    const navigate = useNavigate();
    

    useEffect(()=>{
        fetch(`/post`)
        .then((r)=>r.json())
        .then((p)=> setAllPosts(p))
    },[])


    // function navigateToSignUp(e){
    //     e.preventDefault();
    //     navigate('/signup');
    // }

    return(
        <div className="home-container">
            {currentUser ? null : <div className="landing-page">
                <div className="landing-page-message">
                <h1 className="landing-message">Create Your Own Blog Today!</h1>
                <Link className="home-link-signup" to="/signup">SIGN UP</Link>
                </div>
            </div>}
            
            <div className="all-posts-section">
                <h2>Current Posts</h2>
                {allPosts?.map((post)=>{
                    return <div className="home-post-container">
                    <h3 style={{margin:'20px'}}>{post.title}</h3>
                    <p style={{margin:'20px'}} className="post-content-home">{post.content}</p>
                    </div>
                } )}
            </div>
        </div>
    )
}