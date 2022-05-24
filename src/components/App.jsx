import React, { useState } from "react";
import Heading from "./Header";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [toDo, setToDo] = useState([])

  function handleChange(event){
    const {value} = event.target;
    setItem(value)
    
  }
 
  function addToDo(){
    setToDo(previous => {
      return[...previous, item]
    })
    setItem("");
  }
  function deleteItem(id){
    setToDo(prevValue => {
      return prevValue.filter((todoItem, index) => {
        return index !== id;
      })
    })
  }

  
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange ={handleChange} type="text" value={item}/>
        <button onClick={addToDo}>
          <span>Add</span>
        </button>
      </div>
      {
        toDo.map((todo, index) =>{
        return <List key={index} id={index} item={todo} onChecked={deleteItem}/>
      })}
      
    </div>
  );
}

export default App;
