import { useState } from "react";
import ItemList from "./ItemList";

const FoodItem = ({ item }) => {
  let [activeItems, setActiveItmes] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItmes(newItems);
  };

  return (
    <ul className="list-group">
      {item.map((item) => (
        <ItemList
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={(event) => onBuyButton(item, event)}
        ></ItemList>
      ))}
    </ul>
  );
};

export default FoodItem;
