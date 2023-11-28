import styles from "./ItemList.module.css";

const ItemList = ({ foodItem }) => {
  return (
    <li className={`${styles["rs-item"]} list-group-item`}>
      <span className={styles["rs-span"]}>{foodItem}</span>
    </li>
  );
};

export default ItemList;
