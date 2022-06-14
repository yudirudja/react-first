import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

const App = () => {
  const [taskList, setTaskList] = useState({
    data: [],
  });
  const [newTaskValue, setNewTaskValue] = useState("");

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    const newData = taskList.data;
    newData.push(newTaskValue);
    setTaskList({ data: newData });
    setNewTaskValue("");
  };

  return (
    <div>
      <br />
      <div>
        <Input newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue}/>
        <Button text="Add Task" onClick={actionAddTask} />
      </div>
      <div>
          <ListItem taskList={taskList}/>
      </div>
      <Button
        backgroundColor="#e74c3c"
        text="Clear"
        onClick={() => setTaskList({ data: [] })}
      />
      <Button
        text="Recommendation"
        onClick={() => setNewTaskValue("Task Rekomendasi")}
      />
    </div>
  );
};

export default App;
