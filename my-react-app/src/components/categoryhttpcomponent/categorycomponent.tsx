import React, {useEffect, useState} from 'react'
import { HttpSrevice } from '../../services/httpservice'
import { Category } from '../../models/category'
 
const CategoryComponent = () => {
  const [categories, setCategories] = useState<Category[]>([]);  
  const serv = new HttpSrevice();
  
  /* make call 
    Continue executin till the state update notifications are not received
  */
  useEffect(()=>{
    serv.getCategories()
        .then((response)=>{
            setCategories(response);
        })
        .catch((error)=>{
            console.log(`Error Occurred ${error}`);
        });
  },[]);

  return (
    <div className='container'>
        {
            JSON.stringify(categories)
        }
    </div>
  )
}

export default CategoryComponent
