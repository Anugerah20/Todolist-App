import { FiEdit2 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addTodoList,
  removeTodoList,
  editTodoList,
} from "../redux/actions/todoListAction";

function FormTodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const [inputTodoList, setInputTodoList] = useState("");
  const [updateTodoList, setUpdateTodoList] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputTodoList) {
      alert("This input must not be empty!");
    } else if (updateTodoList) {
      const updatedTodo = {
        ...updateTodoList,
        title: inputTodoList,
      };

      dispatch(editTodoList(updatedTodo));
      setUpdateTodoList(null);
      setInputTodoList("");
      console.log(updateTodoList);
    } else {
      let todoObj = {
        id: Math.floor(Math.random() * 1000),
        title: inputTodoList,
        completed: false,
      };
      console.log(todoObj);
      setInputTodoList("");
      dispatch(addTodoList(todoObj));
    }
  };

  const handleEditTodoList = (todo) => {
    setUpdateTodoList(todo);
    setInputTodoList(todo.title);
  };
  return (
    <main className="w-[90%] sm:w-max h-auto sm:h-auto lg:h-auto mx-auto md:mx-auto flex sm:flex justify-center sm:justify-center items-center sm:items-center font-sansPro flex-col mt-20 lg:mt-20 md:mt-10">
      <h1 className="text-center text-violet-600 sm:text-center text-3xl sm:text-4xl font-extrabold">
        What the plan for today?
      </h1>
      <section className="flex sm:flex justify-center sm:justify-center items-center sm:items-start w-full mx-4 sm:mx-auto mt-10 sm:mt-10 md:mt-5 lg:mt-10">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full sm:w-[450px] px-2 py-2 outline-none border-2 border-violet-600 rounded-sm caret-violet-600 text-violet-600 invalid:border-red-600"
            type="text"
            name="todo"
            id="todo"
            placeholder="What to do"
            value={inputTodoList}
            onChange={(e) => setInputTodoList(e.target.value)}
            autoComplete="off"
          />
          <button
            className={
              "inline-block ml-0 sm:ml-5 mt-5 sm:mt-0 w-full sm:w-[16vh] h-10 sm:h-auto px-20 sm:px-1.5 sm:py-2 py-2 rounded-sm bg-violet-600 text-white hover:bg-violet-800 hover:transition hover:duration-200 hover:ease-in hover:font-bold uppercase border-none outline-none text-center sm:text-center"
            }
            type="submit"
          >
            {updateTodoList ? "UPDATE" : "ADD"}
          </button>
        </form>
      </section>

      {/* START: Filter Button */}
      <section className="font-sansPro flex flex-wrap justify-center sm:justify-start md:justify-center items-center mx-auto mt-4 sm:mt-2 md:mt-2 lg:mt-2">
        <button className="px-3 py-2 sm:px-4 sm:py-2 me-3 sm:me-4 bg-green-500 text-white rounded-full font-bold mb-2 sm:mb-0">
          ALL
        </button>
        <button className="px-3 py-2 sm:px-4 sm:py-2 me-3 sm:me-4 bg-slate-500 text-white rounded-full font-bold mb-2 sm:mb-0">
          ACTIVE
        </button>
        <button className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-500 text-white rounded-full font-bold">
          COMPLETED
        </button>
      </section>
      {/* END: Filter Button */}

      {/* START: List Todo */}
      <section className="w-[90%] md:w-[90%] lg:w-[90%] flex flex-col gap-3 mx-auto mt-5 md:mt-6 lg:mt-6 bg-slate-50 shadow rounded px-4 py-4">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center mb-4 p-2 border-2">
            <input
              className="w-7 h-5 sm:w-9 sm:h-8 cursor-pointer"
              type="checkbox"
              name="todo"
              id="todo"
              // checked={todo.completed}
              // onChange={() => dispatch(handleCheckbox(todo.id))}
            />
            <p
              className="text-xl sm:text-2xl ml-1"
              style={
                todo === true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.title}
            </p>
            <div className="flex items-center ml-auto gap-4 cursor-pointer">
              <button onClick={() => handleEditTodoList(todo)}>
                <FiEdit2 className="text-xl sm:text-2xl" />
              </button>
              <button onClick={() => dispatch(removeTodoList(todo))}>
                <FiTrash className="text-xl sm:text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* END: List Todo */}
    </main>
  );
}

export default FormTodoList;
