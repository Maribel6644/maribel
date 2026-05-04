function SingleTask({ id, texto, colorFondo, estaCompletada, onToggle }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px"
    }}>
      <input 
        type="checkbox"
        checked={estaCompletada}
        onChange={() => onToggle(id)}
      />

      <span style={{
        backgroundColor: colorFondo,
        padding: "10px 15px",
        borderRadius: "20px",
        color: "white",
        textDecoration: estaCompletada ? "line-through" : "none"
      }}>
        {texto}
      </span>
    </div>
  );
}

export default SingleTask;