export default function postContainer({post}){
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


    return(
        <div className='postContainer'>
            <h1>{post.title}</h1>
            <p className="users-posts-content">{post.content}</p>
            <p>{post.tags}</p>
            <button>View</button>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}