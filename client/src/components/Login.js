import React, {  useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Login({setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ username:username, password:password }),
    })
    .then((r) => {
      if(r.ok) {
        r.json().then((user)=>setCurrentUser(user))
        navigate('/home')
      }else{
        alert("Login Failed: Please enter correct username or password!")
      }
    })
    
    
  }

  return (
    <div className='login_wrapper'>
    <h1>Login</h1> 
    <form className='login_form' onSubmit={handleSubmit}>
      <input
        className='form__field'
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />    
      <br/>
      <input
        className='form__field'
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button className="login_btn" type="submit">Login</button>
    </form>
    <br/>
    <div><Link className='slLink' to='/signup'>First time? Register Now!</Link></div>
    </div>
  );
}
export default Login
