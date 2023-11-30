import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
