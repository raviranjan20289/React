import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./app.css";
function App() {
  const todoItems = [
    {
      name: "buy milk",
      dueDate: "10/11/23",
    },
    {
      name: "Go to college",
      dueDate: "10/11/23",
    },
    {
      name: "Go to Patna",
      dueDate: "10/11/23",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>

      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
