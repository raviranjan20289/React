import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/foodItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [" Palak", "Milk", "salad", "panner", "rajma", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // } // this is was using if else condition
  // {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} // using ternary operators

  return (
    <>
      <h1 className = "rs-heading">Hello</h1>
      <ErrorMessage item={foodItems}></ErrorMessage>

      <FoodItem item={foodItems}></FoodItem>
    </>
  );
}

export default App;
