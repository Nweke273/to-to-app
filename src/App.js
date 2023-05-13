import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        description={description}
        setDescription={setDescription}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
