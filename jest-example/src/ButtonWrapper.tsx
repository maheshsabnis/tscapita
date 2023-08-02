import React,{useState} from "react";

type defaultProps = {
    title?:string,
    onClick?:Function
};


export default function ButtonWrapper(props:defaultProps) {
  const [x,setX] = useState(0);
  const display=()=>{
     setX(1);
  }  

  return (
     <div>
            <button onClick={display}>{props.title}</button>
            <hr/>
            <strong>{x}</strong>
    </div>);
}