import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    const root = document.getElementById("root");
    const span = React.createElement("span",{id:"mySpan"}, "Hello! i am span!");
    ReactDOM.render(span, root);
}

export default App;

//start from #2.3