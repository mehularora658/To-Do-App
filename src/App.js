import "./App.css";
import { useState } from "react";

import NavBar from './components/NavBar/NavBar'
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {


  const [Forcetorerender, setForcetorerender] = useState(true);
  const [tasks, settask] = useState([]);

  const [inputValue, setinputValue] = useState("");

  const [desp, setdesp] = useState('')



  const formhandle = (e) => {
    e.preventDefault();
    settask([...tasks, { value: inputValue, task_descripition: desp, isChecked: false, seemore: false }]);
    setinputValue("");
    setdesp('')
    e.target[0].value = "";
    e.target[1].value = "";
  };
  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const despHandle = (e) => {
    setdesp(e.target.value)
  }
  const deleteTask = (valueToRemove) => {
    settask((prevArray) => prevArray.filter((item) => item !== valueToRemove));
  };
  const CheckboxHandle = (e) => {
    console.log(tasks)
  }



  return (
    <>
      <NavBar />

      <div className="app">

        <div className="newTaskWrapper" style={{ width: '400px', marginRight: '20px' }}>

          <NewTask
            formhandle={formhandle}
            handleInputChange={handleInputChange}
            despHandle={despHandle}
          />

        </div>

        <Tasks
          tasks={tasks}
          CheckboxHandle={CheckboxHandle}
          setForcetorerender={setForcetorerender}
          Forcetorerender={Forcetorerender}
          deleteTask={deleteTask}
        />

      </div>
    </>
  );
}

export default App;
