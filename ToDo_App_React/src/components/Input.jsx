import { tasks } from "../assets/tasksList.json";
import { useState } from "react";

export const Input = () => {
  const [tasks, setText] = useState("");

  function addTask(e) {
    if (e.event.key === "Enter") {
      const newTask = {
        name: e.target.value,
        status: "incompleted",
        index: tasks.length,
      };
    }

    setText(newTask);
    tasks.push(newTask);
    e.target.value = "";
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center m-0 p-0">
        <input
          type="text"
          className="flex justify-center items-center h-12 w-[40rem] px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-400"
          placeholder="Add a new task"
          onKeyDown={addTask}
        />
      </div>
    </>
  );
};

export default Input;
