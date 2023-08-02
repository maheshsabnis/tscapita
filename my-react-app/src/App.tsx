import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataProps } from './props';
import SecondChildComponent from './secondchildcomponent';
/* Passing props to the component */
function App(props:DataProps) {
  return (
    <div className="container">
       <h1>The First React Component</h1> 
       <strong>
        {/* Accessing props */}
          {props.msg}
       </strong>
       <FirstChildComponent firstName={'James'} middleName={'Andrew'} lastName={'Bond'}/>
       <br/>
       <SecondChildComponent/>
    </div>
  );
}

const FirstChildComponent=(props:DataProps)=>{
   return(
    <div className="container">
       <h2>The First Child</h2>
       <strong>
          {props.firstName} {props.middleName} {props.lastName}
       </strong>
    </div>
   );
};


export default App;
