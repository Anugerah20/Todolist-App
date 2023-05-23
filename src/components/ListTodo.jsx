import { FiEdit2 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeTodoList } from "../redux/actions/todoListAction";
import { useState } from "react";

function ListTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const [editTodoId, setEditTodoId] = useState(null);

  return (
    <main className="font-sansPro text-center md:text-center">
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
      <section className="w-[90%] md:w-[70%] lg:w-[39%] flex flex-col gap-3 mx-auto mt-5 md:mt-6 lg:mt-6 bg-slate-50 shadow rounded px-4 py-4">
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
              <button onClick={() => setEditTodoId(todo.id)}>
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

export default ListTodo;
