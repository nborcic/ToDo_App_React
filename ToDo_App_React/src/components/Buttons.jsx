const Buttons = ({ onFilterChange }) => {
  
  return (
    <div className="flex flex-row justify-center items-center gap-5 m-2 p-0">
      <button 
        className="h-10 w-20 p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500"
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className="h-10  p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500"
        onClick={() => onFilterChange("incompleted")}
      >
        incompleted
      </button>
      <button
        className="h-10  p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500"
        onClick={() => onFilterChange("completed")}
      >
        completed
      </button>
    </div>
  );
};

export default Buttons;
