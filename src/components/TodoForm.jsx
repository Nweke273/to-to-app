import styles from "../styles.module.css"

const TodoForm = () => {
  return (
    <div>
      <form action="" className={styles.form}>
        <div>
          <input type="text" placeholder="Enter Todo" />
        </div>
        <div>
          <input type="text" placeholder="Enter Description" />
        </div>
        <div>
          <input type="submit" name="" id="" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
