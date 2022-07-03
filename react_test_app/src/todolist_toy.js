import { useState } from "react";

function Todolist() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) =>{
    setToDo(event.target.value);
  }
  const onSubmit = (event) =>{ 
    event.preventDefault();
    if(toDo === ""){
      return;
    }

    // we can not directly change a state like below
    //toDos.push(); --> X

    // we should always use modifier func like setToDos 
        // RECAP
        // modifier func can gets a value or a function as argument.
        // if a func is an argument, the return value of that func will be pass to modifier func
        // argumnent func can get current state value as default
    // '...' give use the elements of the array
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input 
        value={toDo} 
        onChange={onChange} 
        type="text" 
        placeholder="Write your to do..." 
      />
      <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

