import Todo from "./components/todo";
import "./App.css";

function App() {
  const todos = [
    {
      id: 1,
      title: "wash dishes",
      completed: false,
    },
    {
      id: 2,
      title: "make dinner",
      completed: true,
    },

    {
      id: 3,
      title: "do anything",
      completed: false,
    },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
