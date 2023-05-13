import shortid from "shortid";
import styles from "../styles.module.css";
import TodoList from "./TodoList";

const TodoForm = ({
  todo,
  setTodo,
  description,
  setDescription,
  todoList,
  setTodoList,
}) => {
  const takeTodo = (event) => {
    setTodo(event.target.value);
  };

  const takeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    setTodoList([
      ...todoList,
      { id: shortid.generate(), name: todo, desc: description },
    ]);
    console.log(todoList);
    setTodo("");
    setDescription("");
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
        <div>
          <input
            onChange={takeDescription}
            type="text"
            placeholder="Enter Description"
            value={description}
          />
        </div>
        <div>
          <input type="submit" name="" id="" value="submit" />
        </div>
      </form>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoForm;
