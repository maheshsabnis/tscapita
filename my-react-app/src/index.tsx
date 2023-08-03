import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleComponent from './components/simplecomponent/simplecomponent';
import ProductComponent from './components/productcomponent/productcomponent';
import ToggleComponent from './components/useeffectLifecycle/toggelcomponent';
import CategoryComponent from './components/categoryhttpcomponent/categorycomponent';
import LoginComponent from './components/testcomponent/logincomponent';
/* Read the index.html from the 'public' folder and local the <div> elemenwt with 'id' as 'root'*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/* the Component will be mounted and rendered in root */

const message:string = 'I ame message from your parent';

root.render(
  <React.StrictMode>
    {/* The Component */}
    {/* <App msg={message}/> */}
    <ProductComponent></ProductComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
