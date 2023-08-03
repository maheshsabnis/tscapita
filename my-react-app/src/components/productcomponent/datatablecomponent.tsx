/* Import useContext so that the current component will consume
 data received from the parent using the Context Object
*/
import React, {useContext} from 'react'
/* Use the Context Schema */
import { DataContextEvent } from '../../dataotext';

const DataTableComponent = () => {
  // 1. Create Consumer from the context
  let consumer = useContext(DataContextEvent);  

  // 2. Read array data from it
  let dataSource:Array<object> = new Array<object>();

  dataSource = consumer[Object.keys(consumer)[0]]; //This will read products

  // 3. Read the Callback Dispatch Action

  let event = consumer[Object.keys(consumer)[1]]; // This will read setProduct()

  // 4. make sure that the dataSource is in valid state
  if(dataSource === undefined || dataSource === null || dataSource.length === 0){
    return (
        <div className='alert alert-danger'>
            <strong>
                The Data is not present to show it in component
            </strong>
        </div>
    );
  }

  // 5. Make sure that the dataSource is an array so that columns and rowes can be genereted
  if(!Array.isArray(dataSource)){
    return (
        <div className='alert alert-danger'>
            <strong>
                No Records
            </strong>
        </div>
    );
  } else {
    let columns = Object.keys(dataSource[0]);
  return (
    <div className='container'>
      <table className='table table-bordered table-striped'>
          <thead>
            <tr>
                {
                    columns.map((col,idx)=>(
                        <th key={idx}>{col}</th>
                    ))
                }
            </tr>
          </thead> 
          <tbody>
            {/* Make sure that when rows are generated
              the column (col) MUST be explicitly set as 
              the 'key' of the 'record' using
              typescript 'keyof' definition

              'col as keyof typeof record'

              The 'col' is a property of the 'record' object


            */}
            {
                dataSource.map((record:object,index)=>(
                     <tr key={index} onClick={()=>event(record)}>
                        {
                            columns.map((col,idx)=>(
                                <td key={idx}>{record[col as keyof typeof record]}</td>
                            ))
                        }
                     </tr>
                ))
            }
          </tbody>
       </table>      
    </div>
  )}
}

export default DataTableComponent;
