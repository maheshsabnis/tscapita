import React, {useState} from 'react'
import SelectComponent from '../reusablecomponent/selectcomponent';
import DataTableComponent from './datatablecomponent';
import { Product } from '../../models/productmodel'

import { DataContextEvent } from '../../dataotext';

const ProductComponent = () => {
  
    /* define a prodiuct state */
    const [product, setProduct] = useState<Product>({
        ProductId:0, ProductName:'', CategoryName:'', Manufacturer:'', Price:0
    });

    

   

    const [products, setProducts] = useState<Product[]>([]);
    
    /* Local Constants for showing data in select elements */

    const categories:string[] = ['Electronics', 'Electrical', 'Home', 'Fashion'];

    const manufacturers = ['TATA', 'Bajaj', 'Reliance', 'Phillipse'];

    const clear=()=>{
        setProduct({
            ProductId:0, ProductName:'', CategoryName:'', Manufacturer:'', Price:0
        });
    };

    const save=()=>{
        setProducts([...products, product]);
    };

  return (
    <div className='container'>
       <div className='form-group'>
           Product Id:
           <input type="text" placeholder='Product Id' className='form-control'
            value={product.ProductId}
            onChange={(evt)=>setProduct({...product, ProductId:parseInt(evt.target.value)})}
           />
       </div>
       <div className='form-group'>
           Product Name:
           <input type="text" placeholder='Product Name' className='form-control'
            value={product.ProductName}
            onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}
           />
       </div>
       <div className='form-group'>
           Category Name:
           <SelectComponent dataSource={categories}
             onSelectedValue={(value:string)=>setProduct({...product, CategoryName:value})} bindPorperty={product.CategoryName}
           ></SelectComponent>
           {/* <select  className='form-control' title='CategoryName'
            value={product.CategoryName}
            onChange={(evt)=>setProduct({...product, CategoryName:evt.target.value})}
           >
             <option>Select Category</option>
             {
                categories.map((cat,idx)=>(
                    <option key={idx} value={cat}>{cat}</option>
                ))  
             }

           </select> */}
       </div>
       <div className='form-group'>
           Manufacturer Name:
           <SelectComponent dataSource={manufacturers}
            onSelectedValue={(value:string)=>setProduct({...product, Manufacturer:value})} bindPorperty={product.Manufacturer}
           ></SelectComponent>
           {/* <select  className='form-control' title='Manufacturer'
            value={product.Manufacturer}
            onChange={(evt)=>setProduct({...product, Manufacturer:evt.target.value})}
           >
            <option>Select Manufacturer</option>
             {
                manufacturers.map((man,idx)=>(
                    <option key={idx} value={man}>{man}</option>
                ))  
             }

           </select> */}
       </div>
       <div className='form-group'>
           Product Id:
           <input type="text" placeholder='Price' className='form-control'
            value={product.Price}
            onChange={(evt)=>setProduct({...product, Price:parseInt(evt.target.value)})}
           />
       </div>
       <div className='form-group'>
           <button className='btn btn-warning'
             onClick={clear}
           >Clear</button>
           <button className='btn btn-success'
            onClick={save}
           >Save</button>
 
       </div>
       <br/>
         {/* Using the Context to pass complex data to child */}

         <DataContextEvent.Provider value={{products,setProduct}}>
              <DataTableComponent></DataTableComponent>
        </DataContextEvent.Provider>  



       {/* <table className='table table-bordered table-striped'>
          <thead>
            <tr>
                {
                    Object.keys(product).map((header,index)=>(
                        <th key={index}>{header}</th>
                    ))
                }
            </tr>
          </thead> 
          <tbody>
            {
                products.map((prd,idx)=>(
                    <tr key={idx}
                      onClick={()=>setProduct(prd)}
                    >
                        {
                            Object.keys(product).map((header,index)=>(
                                <td key={index}>{prd[header]}</td>
                            )) 
                        }
                    </tr>
                ))
            }
          </tbody>
       </table>       */}

    </div>
  )
}

export default ProductComponent
