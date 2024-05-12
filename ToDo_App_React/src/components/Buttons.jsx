const Buttons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-5 m-0 p-0">
      <button className="h-10 w-20 p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500">
        All
      </button>
      <button className="h-10 w-20 p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500">
        Active
      </button>
      <button className="h-10  p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500">
        incompleted
      </button>
      <button className="h-10  p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500">
        Completed
      </button>
      <button className="h-10 w-20 p-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500">
        Inactive
      </button>
    </div>
  );
};

export default Buttons;
