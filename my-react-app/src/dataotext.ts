import { createContext } from "react";
import { Product } from "./models/productmodel";
/* Context with an initial value */
export const DataContext = createContext({}); 

/* If the Context object is used for
  complex data as will as dispatch event
  then make sure that the context object should not have
  default value as empty {} object
*/

/* define a schema for the Context */

interface DataContextSchema {
    [x:string]:any,
    products:Array<any>,
    setProduct: React.Dispatch<React.SetStateAction<Product>> | null
}

/* Define a DataContext */
export const DataContextEvent = createContext<DataContextSchema>({
    products:[],
    setProduct:null
});


 