export default function postContainer({posts}){
    return(
        <div className='postContainer'>
            <h1>{posts.title}</h1>
            <p className="users-posts-content">{posts.content}</p>
            <p>{posts.tags}</p>
            <button>View</button>
            <button>Edit</button>
            <button>Delete Post</button>
        </div>
    )
}