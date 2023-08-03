import React from 'react'

/* Prop types for the select component */

type defaultProps = {
    dataSource:any[], /* Data Received from Parent */
    onSelectedValue:Function, /* the function that will be subscribed by parent for receiving data emitted by the current component */
    bindPorperty:any /* The Bindable property from the parent, so that whern that property is changed in parent the changes will be notified (bind) to the child */
}

const SelectComponent = (props:defaultProps) => {

    /* define a behavior for reading the value loacally when an onChang event raised on the select element*/

    const onValueChange=(evt:any)=>{
        /* pass the value received from the event to the 'onSelectedValue' props
          so that the parent can subscribe to it
        */
       props.onSelectedValue(evt.target.value);
    }


    /* Fallback UI is invalid data is recievd */
  if(props.dataSource?.length === 0){
     return (
        <div className='alert alert-danger'>
            <strong>
                No data to show
            </strong>
        </div>
     )
  }  

  return (
    <div className='container'>
        <select title='select value' className='form-control'
          onChange={onValueChange} value={props.bindPorperty}
        >
            <option>Select value</option>
            {
                props.dataSource.map((value, index)=>(
                    <option key={index} value={value}>{value}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectComponent
