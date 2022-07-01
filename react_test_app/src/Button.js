import PropTypes from "prop-types";
// create-react-app change CSS code into js object
// and this js object have btn inside.
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
  };
  

export default Button;