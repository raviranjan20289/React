import styles from "./ItemList.module.css";

const ItemList = ({ foodItem, bought, handleBuyButtonClicked }) => {
  return (
    <li
      className={`${styles["rs-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["rs-span"]}>{foodItem}</span>
      <button
        type="button"
        className={`${styles.button} btn btn-info active`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default ItemList;
