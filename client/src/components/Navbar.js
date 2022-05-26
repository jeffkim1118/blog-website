import { Link, useNavigate } from "react-router-dom";
import mainLogo from'../images/mainl.png'

function Navbar({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  function handleLogoutClick(){
    fetch(`/logout`, {method: "DELETE"})
    .then((r)=>{
      if(r.ok){
        setCurrentUser(null);
        navigate("./login", {replace:true});
      }
    });
  }
  return(
    <>
    <header className="navigationHeader">
    <a href="/"><img className="main-logo" alt="main_logo" src={mainLogo}/></a>
      <div className="nav">
        {currentUser ? (
          <div>
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/profile">Profile</Link>
          <Link className="link" to="/post">Create New Post</Link>
          <button className='log_out_btn' onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <>
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/signup">Sign Up</Link>
          <Link className="link" to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
    
    </>
  )
}   
export default Navbar