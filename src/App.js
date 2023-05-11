import "./App.css";
import { useState } from "react";

function App() {
  const ArrayData = [];

  const [Forcetorerender, setForcetorerender] = useState(true);
  const [tasks, settask] = useState(ArrayData);

  const [inputValue, setinputValue] = useState("");
  

  const formhandle = (e) => {
    e.preventDefault();
    settask([...tasks, {value:inputValue,isChecked:false}]);
    setinputValue("");
    e.target[0].value = "";
  };
  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const deleteTask = (valueToRemove) => {
    settask((prevArray) => prevArray.filter((item) => item !== valueToRemove));
  };
  const CheckboxHandle=(e)=>{
    console.log(tasks)
  }
 
  

  return (
    <>
      <h1>
        <span className="todo">To do </span>App
      </h1>
      <div className="app">
        <div>
          <form className="add-item-form" onSubmit={formhandle}>
            <input
              className="taskFeild"
              type="text"
              placeholder="Enter task"
              onChange={handleInputChange}
            />
            <button className="addTaskBtn" type="submit">
              Add task
            </button>
          </form>
        </div>

        {tasks.map((item, index) => (
          <div class="task">
            <div>
              <input
                className="CheckBox"
                key={index}
                type="checkbox"
                onChange={(e) => {
                  CheckboxHandle(e);
                  tasks[index].isChecked = !tasks[index].isChecked;
                  setForcetorerender(!Forcetorerender);
                }}
              />

              {/* <span>
                {item.value}
              </span> */}
              <span>
                {tasks[index].isChecked == false ? (
                  item.value
                ) : tasks[index].isChecked == true ? (
                  <del>{item.value}</del>
                ) : null}
              </span>
            </div>
            <button className="deleteBtn" onClick={() => deleteTask(item)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
