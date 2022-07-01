import Button from "./Button";
// create-react-app change CSS code into js object
// and this js object have btn inside.
import styles from "./App.module.css"


function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back to React</h1>
      <Button text={"setsetset"} />
    </div>
  );
}

export default App;
