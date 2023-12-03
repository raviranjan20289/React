import { useState } from "react";
import { MdAddBox } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    onNewItem(todoName, todoDueDate);
    setTodoDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row rs-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your todo"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success rs-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
