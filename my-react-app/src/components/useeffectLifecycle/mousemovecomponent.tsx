import React, { useState, useEffect } from 'react'

const MouseMoveComponent = () => {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  
  const getMousePostions=(evt:any)=>{
    console.log(`x-position ${x} and y-position ${y}`)
      setX(evt.clientX);  /* X-Position of Mouse */
      setY(evt.clientY); /* Y-Position of Mouse */
  }
  
  useEffect(()=>{
    /* Code executed after the MOunting */
      window.addEventListener('mousemove', getMousePostions);  
      return ()=>{
        console.log('Unmounted');
        /* code executed when the component is unmounted */
        window.removeEventListener('mousemove', getMousePostions);  
      }    
  });



  return (
    <div className='container'>
        <h2>Mouse Move Event Capture</h2>
        <strong>
            x-Postion : {x} && y-Postion : {y}
        </strong>
    </div>
  )
}

export default MouseMoveComponent
