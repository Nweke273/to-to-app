import styles from "../styles.module.css";

const TodoList = (props) => {
    let count = 1;
  let allNames = props.names.map((name, index) => {
    return <h4 key={index} className={styles.singleList}>{count ++}. {name}</h4>;
  });
  return (
    <div className={styles.listTodo}>
      <h3>All Todos</h3>
      {allNames}
    </div>
  );
};

export default TodoList;
