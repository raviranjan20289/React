import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./app.css";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <Container>
        <center className="todo-container">
          <AppName></AppName>
          <AddTodo onNewItem={handleNewItem}></AddTodo>
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
          ></TodoItems>
        </center>
      </Container>
    </>
  );
}

export default App;
