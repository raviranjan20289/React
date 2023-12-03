import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnDown}) => {
 
  return (
    <input
      type="text"
      placeholder="Enter your food"
      className={styles.foodInput}
      //   onChange={(event) => handleOnChange(event)} // use this one or below one
      onKeyDown={handleOnDown}
    />
  );
};

export default FoodInput;
