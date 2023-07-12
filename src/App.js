import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './list';

const App=()=> {
  const[inputList,setInputList]=useState("");//this will store the initial and the final state
  const[Items,setItems]=useState([])
  //below method will help to reflect the change in state
  const itemsEvent=(event)=>{
    setInputList(event.target.value)
  }

  const listOfitems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList]
    })
    setInputList("")
  }
  const deleteItems=(id)=>{
    // console.log("deleted")

    setItems((oldItems)=>{
      // filter is used to delete old items from the array
      return oldItems.filter((arrEle,index)=>{
        return index!==id; //it will return theitems whose index is not equal to the id


      })
    })
}
  return (
    <div className="main_div">
      <div className='center_div'>
        <br/>
        <h1>ToDo List 
        </h1>
        <br/>
        <input 
        type='text' 
        value={inputList}
        placeholder='Add items...' 
        onChange={itemsEvent}
        />
        <button onClick={listOfitems}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval,index)=>{
            return<List
             key={index} 
             id={index} 
             text={itemval}
             onSelect={deleteItems}
             /> 
            //here the componenet is being created of itemVal,props is passed to access it
          })}
        </ol>
      </div>
    </div>

  );
}

export default App;
