// import logo from './logo.svg';
// import './App.css';
import Button from "./Button";
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      <h1>Welcome back to React</h1>
      <Button text={"setsetset"} />
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
