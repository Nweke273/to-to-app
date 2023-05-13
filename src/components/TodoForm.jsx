import { useState } from "react";
import styles from "../styles.module.css";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  //   const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  const takeTodo = (event) => {
    setTodo(event.target.value);
  };

  //   const takeDescription = (event) => {
  //     setDescription(event.target.value);
  //   };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    let allTodos = todoList;
    allTodos.push(todo);
    setTodoList(allTodos);
    setTodo("");
  };
  return (
    <div>
      <form action="" onSubmit={handleFormSubmission} className={styles.form}>
        <div>
          <input
            onChange={takeTodo}
            type="text"
            placeholder="Enter Todo"
            value={todo}
          />
        </div>
        {/* <div>
          <input
            onChange={takeDescription}
            type="text"
            placeholder="Enter Description"
            value={description}
          />
        </div> */}
        <div>
          <input type="submit" name="" id="" value="submit" />
        </div>
      </form>
      <TodoList names={todoList} />
    </div>
  );
};

export default TodoForm;
