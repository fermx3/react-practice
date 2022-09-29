import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="todos-container">
        <Todo title="Title 1" />
        <Todo title="Title 2" />
        <Todo title="Title 3" />
      </div>
    </div>
  );
};

export default App;
