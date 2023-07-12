import React from 'react'

const List=(props) =>{
   
    return(
        <>
        <div className='todo_style'>
        {/* <i className="fa-regular fa-trash-can" onClick={props.onSelect}></i> */}
        {/* using onclick function on the icon where on selecting you delete the item */}
        <i className="fa-regular fa-trash-can" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
          {props.text}
        </div>
        </>
    )
}

export default List