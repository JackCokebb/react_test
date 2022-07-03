import { useState } from "react";

function App() {
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
    // '...' give use the elements of the array
    setToDos(currentArray => [toDo, ...currentArray]);
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
    </div>
  );
}

export default App;
