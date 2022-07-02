import { useState, useEffect } from "react";

//another component
//component is the function that return jsx
// uppercase needed
function Hello(){
  //log will appear only when component is created at first time.
  useEffect(()=>{
    console.log("created!");

    // the function that will be run when the component is destroyed 
    // it is return func of useEffect func
    // this is called **cleanup function**
    return ()=> console.log("destroyed :(")
  },[])
  return <h1>Hello!</h1>;
}

function App() {
  
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing(prev => !prev);
  }

  // we are creating and destroying component with ' showing ? "Hide" : "Show" '
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
