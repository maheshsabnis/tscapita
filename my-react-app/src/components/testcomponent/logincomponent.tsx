import React, { useState } from 'react'

const LoginComponent = () => {
  const [email,setEmial] = useState('');
  
  const click=()=>{
    console.log('clicked');
    setEmial('sabnis_m@hotmail.com');
  };
  
  return (
    <div className='container'>
        <div>
            Email:
            <input type="email" name="email" placeholder='Enter Email' 
              value={email}
              readOnly
            />
        </div>
        <div>
            Password:
            <input type="password" name="password" placeholder='Enter Password' />
        </div>
        <div>
            <button onClick={click}>Login</button>
            <button>Register</button>
        </div>
    </div>
  )
}

export default LoginComponent
