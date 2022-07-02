//import Button from "./Button";
//import styles from "./App.module.css"

// useEffect allow us to render some code only once at the first time
// so that even if some states are changed, some code will not be re-rendered.
// useEffect function renders the things after all the other things are rendered
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  console.log("i run this all the time");
  // const iRunThisOnce = ()=> {
  //   console.log("i run only once");
  // }

  // useEffect allow us to render some code only once at the first time
  // as [] is empty, react watching nothing --> so react will run this code only one time.
  //useEffect(iRunThisOnce,[])
  useEffect(()=>{
    console.log("i run only once")
  },[]);

  // when i want to run this code only when this keyword changes
  // (not when counter changes)
  // As i write [keyword] --> telling react to run this code if this keyword changes(=watch the keyword)
  useEffect(()=>{
    console.log("i run when 'keyword' changes", {keyword});
  },[keyword]);
  useEffect(()=>{
    console.log("i run when 'counter' changes");
  }, [counter])
  useEffect(()=>{
    console.log("i run when 'keyword' and 'counter' changes");
  }, [keyword, counter])
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!!</button>
    </div>
  );
}

export default App;
