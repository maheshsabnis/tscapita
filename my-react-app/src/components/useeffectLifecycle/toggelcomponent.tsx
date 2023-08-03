import React, { useState } from 'react'
import MouseMoveComponent from './mousemovecomponent';

const ToggleComponent = () => {
  const [toggle, updateToggle] = useState(true);  

  return (
    <div className='container'>
        <button onClick={()=>updateToggle(!toggle)}>Toggle</button>
        {
            toggle && <MouseMoveComponent></MouseMoveComponent>
        }
    </div>
  )
}

export default ToggleComponent
