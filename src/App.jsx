import { useState } from "react";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";
import Card from "./components/UI/Card";

const App = () => {
  const [todos, setTodos] = useState([]);

  // add
  const addTodo = (newInfo) => {
    const newTodo = [...todos, { newInfo: newInfo, isCompleted: false }];
    setTodos(newTodo);
  };

  // completion
  const completeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  };

  // delete
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  // Update
  const updateTodo = (index, newInfo) => {
    const newTodo = [...todos];
    newTodo[index].newInfo = newInfo;
    setTodos(newTodo);
  };

  return (
    <div className="m-auto p-2">
      <h1 className="text-center text-2xl shadow-sm pb-4">Todo App</h1>
      <Card>
        <Form addTodo={addTodo} />
      </Card>
      <Card>
        <div className="bg-accent-dark rounded p-2">
          <h1 className="text-xl  text-grey-alwhite rouded">
            Your Todos appear here!
          </h1>
        </div>
        {todos.length === 0 ? (
          <p className="flex justify-center m-2"> Wow, Looks empty!</p>
        ) : (
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              index={index}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))
        )}
      </Card>
      {/* Remaining Todos */}
      <Card>
        Remaining Todos: {todos.filter((todo) => !todo.isCompleted).length}
      </Card>
    </div>
  );
};

export default App;
