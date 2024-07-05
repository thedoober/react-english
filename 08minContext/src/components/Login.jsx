import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username ,setUsername]=useState('');
    const [count, setCount]=useState(0);
    const [password,setPassword]=useState('');
    const {setUser} = useContext(UserContext)
    
    const handleSubmit=(e)=>{
      //Prevent page from refreshing
      e.preventDefault()
      setUser({username, password})
      setCount(count+1);
      console.log(count);
    }
  
  return (
    <div>
      <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
        /> 
        {" "}
        <input 
        type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSubmit}>Button</button>
    </div>
  )
}

export default Login