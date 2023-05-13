import styles from "../styles.module.css";

const Todo = ({ item, todoList, setTodoList }) => {
  let count = 0;
  const removeTodo = () => {
    setTodoList(todoList.filter((list) => list.id !== item.id));
  };
  return (
    <div className={styles.singleList}>
      <h4>
        {count++}. {item.name}
      </h4>
      <h4 className={styles.desc}>{item.desc}</h4>
      <div className={styles.container}>
      <button onClick={removeTodo} className={styles.deleteBtn}>Done</button>

      </div>
    </div>
  );
};
export default Todo;
