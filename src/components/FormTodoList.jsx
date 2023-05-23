import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodoList, updateTodoList } from "../redux/actions/todoListAction";

function FormTodoList() {
  const dispatch = useDispatch();
  const [inputTodoList, setInputTodoList] = useState("");

  const [editTodoId, setEditTodoId] = useState(null);
  const [updateTodoText, setUpdateTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputTodoList) {
      alert("This input must not be empty!");
    } else if (editTodoId) {
      dispatch(updateTodoList(editTodoId, inputTodoList));
      setEditTodoId(null);
    } else {
      // console.log(inputTodoList);
      let date = new Date();
      let time = date.getTime();
      let todoObj = {
        id: time,
        title: inputTodoList,
        completed: false,
      };
      // console.log(todoObj);
      setInputTodoList("");
      dispatch(addTodoList(todoObj));
    }
  };
  return (
    <main className="w-[90%] sm:w-max h-[40vh] sm:h-[40vh] lg:h[40vh] mx-auto md:mx-auto flex sm:flex justify-center sm:justify-center items-center sm:items-center font-sansPro flex-col">
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
            value={editTodoId ? updateTodoText : inputTodoList}
            onChange={(e) =>
              editTodoId
                ? setUpdateTodoText(e.target.value)
                : setInputTodoList(e.target.value)
            }
            autoComplete="off"
          />
          <button
            className="inline-block ml-0 sm:ml-5 mt-5 sm:mt-0 w-full sm:w-20 h-10 sm:h-auto px-20 sm:px-4 sm:py-2 py-2 rounded-sm bg-violet-600 text-white hover:bg-violet-800 hover:transition hover:duration-200 hover:ease-in hover:font-bold uppercase border-none outline-none text-center"
            type="submit"
          >
            {editTodoId ? "Update" : "ADD"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default FormTodoList;
