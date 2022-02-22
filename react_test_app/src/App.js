import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    const root = document.getElementById("root");
    const Title = <h3 id = "title" onMouseEnter={()=> console.log("entered")}>
        Hello! i am title!
        </h3>
    const btn = <button 
        style={{
            backgroundColor : "tomato",
        }} 
        onClick={
            () => console.log("clicked")
        }>click me!</button>
//     const h3 = React.createElement("h3",{id:"mySpan", 
//     onMouseEnter: ()=> console.log("entered"),
// }, "Hello! i am span!");
//     const btn = React.createElement("button",{
//         onClick: () => console.log("clicked"),
//     }, "Click me!");
    const container = React.createElement("div",null, [Title, btn]);
    ReactDOM.render(container, root);
}

export default App;

//start from #2.3