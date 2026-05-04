import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      marginTop: "50px",
      backgroundColor: "#fdf6ec",
      padding: "20px",
      borderRadius: "15px"
    }}>
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
  <h1 style={{
    margin: 0,
    color: "#d97706",
    fontSize: "40px"
  }}>
    To Do List
  </h1>

  <h2 style={{
    margin: 0,
    color: "#d97706",
    fontsSize: "30px"
  }}>
    Checklist
  </h2>
</div>

      <TodoList />
    </div>
  );
}

export default App;