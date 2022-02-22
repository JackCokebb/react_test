import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    const root = document.getElementById("root");
    //my own component should be start with upper case
    function Title() {return (<h3 id = "title" onMouseEnter={()=> console.log("entered")}>
        Hello! i am title!
        </h3>);}
    
    const Btn = () => (<button 
        style={{
            backgroundColor : "tomato",
        }} 
        onClick={
            () => console.log("clicked")
        }>click me!</button>);
//     const h3 = React.createElement("h3",{id:"mySpan", 
//     onMouseEnter: ()=> console.log("entered"),
// }, "Hello! i am span!");
//     const btn = React.createElement("button",{
//         onClick: () => console.log("clicked"),
//     }, "Click me!");

//how to use function in JSX
    const Container =()=> (<div>
        <Title/>
        <Btn/>
    </div>);
    
    ReactDOM.render(<Container/>, root);
}

export default App;

//start from #2.3