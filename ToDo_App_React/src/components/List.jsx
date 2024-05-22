import React from "react";

const List = ({ items, deleteMe }) => {
  
  return (
    <div className="flex flex-col justify-center items-center m-0 p-0">
      <div className="flex justify-center items-center w-[40rem] px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400">
        <ol>
          {items.map((item, index) => (
            <li
              className="bg-white rounded p-2 font-bold flex justify-between items-center hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 w-80 transition duration-500 ease-in-out m-2"
              key={item.index}
            >
              {index + 1} - {item}{" "}
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
  );
};

export default List;
