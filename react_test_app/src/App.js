import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root");
function App(){
   const data = React.useState(0);
    console.log(data);
    // array(2) [undefined, func] --> undefined == data, func == func to change data
    const [counter, modifier] = data;
    // is same with
    //const counter = data[0];
    //const modifier = data[1];
    
    return(
    <div>
        <h3>total clicks:{counter}</h3>
        <button >click me!</button>
    </div>);

}
ReactDOM.render(<App/>,root);
export default App;

//start from #3.1