import { FiEdit2 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

function ListTodo() {
  return (
    <main className="text-center md:text-center inline ">
      {/* START: Filter Button */}
      <section className="flex sm:flex justify-center sm:justify-start md:justify-center items-center  md:items-center sm:items-center mx-0 sm:mx-[27rem] md:mx-auto mt-4 sm:mt-2 md:mt-2 lg:mt-2">
        <button className="px-3 py-2 sm:px-4 sm:py-2 me-3 sm:me-4 bg-green-500 text-white rounded-full font-bold">
          ALL
        </button>
        <button className="px-3 py-2 sm:px-4 sm:py-2 me-3 sm:me-4 bg-slate-500 text-white rounded-full font-bold">
          ACTIVE
        </button>
        <button className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-500 text-white rounded-full font-bold">
          COMPLETED
        </button>
      </section>
      {/* END: Filter Button */}

      {/* START: List Todo */}
      <section className="w-[90%] md:w-[70%] lg:w-[40%] flex justify-between items-center mt-8 md:mt-6 lg:mt-6 mx-auto lg:mx-auto md:mx-auto border-[3px] border-gray-700 rounded px-2 py-3">
        <div className="flex justify-center items-center">
          <input
            className="w-7 h-5 sm:w-9 sm:h-8"
            type="checkbox"
            name="todo"
            id="todo"
          />
        </div>
        <div className="flex items-center text-xl sm:text-2xl">
          <p>Buy Milk</p>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <FiEdit2 className="text-xl sm:text-2xl" />
          <FiTrash className="text-xl sm:text-2xl" />
        </div>
      </section>
      {/* END: List Todo */}
    </main>
  );
}

export default ListTodo;
