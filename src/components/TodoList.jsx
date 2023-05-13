import styles from "../styles.module.css";
import Todo from "./Todo";
const TodoList = ({ todoList, setTodoList }) => {
  let allNames = todoList.map((item) => {
   return <Todo key={item.id} item={item} todoList={todoList} setTodoList={setTodoList} />;
  });
  return (
    <div className={styles.listTodo}>
      <h3>All Todos</h3>
      {allNames}
    </div>
  );
};

export default TodoList;
