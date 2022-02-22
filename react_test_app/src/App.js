import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    const root = document.getElementById("root");
    let counter = 0;
    
    //not a good way to re-rendering
    function countUp(){
        counter +=1;
        Render();
    }
    function Render(){
        ReactDOM.render(<Container/>, root);
    }
    const Container =()=> (
    <div>
        <h3>total clicks: {counter}</h3>
        <button onClick={countUp}>click me!</button>
    </div>);

    Render();
}

export default App;

//start from #3.1