import ItemList from "./ItemList";

const FoodItem = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <ItemList key={item} foodItem={item}></ItemList>
      ))}
    </ul>
  );
};

export default FoodItem;
