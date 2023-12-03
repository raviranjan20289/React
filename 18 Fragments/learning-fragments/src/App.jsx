import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/foodItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([
    "salad",
    "milk",
    "cheese",
    "panner",
  ]);

  const handleOnDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // } // this is was using if else condition
  // {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} // using ternary operators

  return (
    <>
      <Container>
        <h1 className="rs-heading">Hello</h1>
        <FoodInput handleOnDown={handleOnDown}></FoodInput>
        <ErrorMessage item={foodItems}></ErrorMessage>
        <FoodItem item={foodItems}></FoodItem>
      </Container>

      {/* <Container>
        <p>
          Hello, the above food item list is really awesome for your health and
          well being. Thank You!!!.
        </p>
      </Container> */}
    </>
  );
}

export default App;
