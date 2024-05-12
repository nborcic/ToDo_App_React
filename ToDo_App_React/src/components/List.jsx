import { tasks } from "../assets/tasksList.json";
const List = () => {
  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 ">
      <div className="flex justify-center items-center  w-[40rem] px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400 ">
        <ol>
          <ul>
            {tasks.map(({ name, status, index }) => {
              return (
                <div className="items-center justify-center">
                  <li
                    key={index}
                    className="h-12 bg-white p-2 m-2 rounded-md items-center text-blue-600 "
                  >
                    {" "}
                    {index} - {name} - {status}
                  </li>
                </div>
              );
            })}
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default List;
