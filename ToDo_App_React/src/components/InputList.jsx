import React, { useState } from "react";

import { Icon } from "@iconify/react";

function InputList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [style, setStyle] = useState({});

  const deleteMe = (id) => {
    const updatedItems = [...items];
    updatedItems.splice(id, 1);
    setItems(updatedItems);
  };
  const lineOverMe = (id) => {
    const updatedItems = [...items];
    updatedItems[id].status = "DONE";
    setItems(updatedItems);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: items.index, value: inputValue, status: "not done" },
    ]);
    setInputValue("");
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleAddItem}
          className="flex justify-center"
          id="inputId"
        >
          <input
            required
            maxLength={40}
            type="text"
            placeholder="Add a new item..."
            className="border-2 border-gray-200 focus:outline-none focus:border-indigo-400 w-[50rem] px-4 rounded-lg m-2 p-2 flex justify-between items-center hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 transition duration-500 ease-in-out"
            key={inputValue.id + 1}
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

        <div className="flex flex-col justify-center items-center m-0 p-0">
          <div className="flex justify-center items-center w-[70rem] px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400">
            <ol>
              {items.map((item, id) => (
                <li
                  className="bg-white rounded p-2 font-bold flex justify-between items-center hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 w-100 transition duration-500 ease-in-out m-2 "
                  key={items.index}
                >
                  {id + 1} - {item.value} - {item.status}
                  <button
                    type="button"
                    id="lineOverMe"
                    className="text-white w-10 p-2 bg-indigo-700 rounded-md"
                    onClick={() => lineOverMe(id)}
                  >
                    <Icon icon="mdi:done" className="w-6 h-6 m-0 p-0 " />
                  </button>
                  <button
                    type="button"
                    id="deleteMe"
                    className="text-white w-10 p-2 bg-indigo-700 rounded-md"
                    onClick={() => deleteMe(id)}
                  >
                    <Icon
                      icon="mdi:delete-outline"
                      className="w-6 h-6 m-0 p-0 "
                    />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default InputList;
