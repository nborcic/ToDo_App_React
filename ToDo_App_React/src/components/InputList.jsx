import React, { useState } from "react";

function InputList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const deleteMe = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: items.length, value: inputValue, status: "notDone" },
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
          <div className="flex justify-center items-center w-[40rem] px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400">
            <ol>
              {items.map((item, index) => (
                <li
                  className="bg-white rounded p-2 font-bold flex justify-between items-center hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 w-80 transition duration-500 ease-in-out m-2"
                  key={item.id + 1}
                >
                  {item.id} - {item.value} - {item.status}
                  <button
                    type="button"
                    id="deleteMe"
                    className="text-white w-8 p-2 bg-indigo-700 rounded-md"
                    onClick={() => deleteMe(index)}
                  >
                    X
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
