import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ onAddItem }) {
  const [inputValue, setInputValue] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    onAddItem(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleAddItem} className="flex justify-center">
        <input
          required
          type="text"
          placeholder="Add a new item..."
          className="border-2 border-gray-200 focus:outline-none focus:border-indigo-400 w-[50rem] px-4 rounded-lg m-2 p-2 flex justify-between items-center hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 transition duration-500 ease-in-out"
          key={inputValue.id}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="border-2 border-gray-200 focus:outline-none focus:border-indigo-400 px-4 rounded-lg m-2 p-2 flex justify-between items-center hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-700 hover:text-indigo-700 focus:ring-opacity-50 transition duration-500 ease-in-out text-white"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Input;
