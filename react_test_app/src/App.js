import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*Movie.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
return (
BrowserRouter>
Routes>
Route path="/movie" element={} />
Route path="/" element={} />
/Routes>
/BrowserRouter>
);
}

export default App;
*/