import React,{useState} from 'react'

const MyTestComponent = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [result,setResult] = useState(0); 
    /* Logic BEhavior */
     const add = ()=>{
         setResult(x+y);
     }
     const clear = ()=>{
        setX(0);
        setY(0);
        setResult(0);
    }
   return (
    <div className='container'>
        <div className='form-group'>
            <label htmlFor="x">X</label>
            <input type="text" name="x"
             className='form-control' placeholder='Enter x'
              value={x}
              onChange={(evt)=>setX(parseInt(evt.target.value))}
             />
        </div>
        <div className='form-group'>
            <label htmlFor="y">Y</label>
            <input type="text" name="y"
             className='form-control' placeholder='Enter y'
             onChange={(evt)=>setY(parseInt(evt.target.value))}
             value={y}
             />
        </div>
        <div className='form-group'>
            <label htmlFor="res">Result</label>
            <input type="text" name="result"
            value={result} readOnly
             className='form-control' placeholder='The Resule Here'/>
        </div>
        <div className='form-group'>
            <button className='btn btn-success'
             onClick={add}
            >Add</button>
            <button className='btn btn-primary'
             onClick={clear}
            >Clear</button>
        </div>
    </div>
  )
}

export default MyTestComponent
