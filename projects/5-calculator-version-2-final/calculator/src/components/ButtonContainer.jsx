import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClicked }) => {
  const Buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {Buttons.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={()=>onButtonClicked(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
