function Card({ titulo, descripcion, imagen, precio = 0, children }) {
  return (
    <div className="card">
      {imagen && <img src={imagen} alt={titulo} />}
      <div className="card-body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        {precio > 0 && <strong>${precio}</strong>}
        {children}
      </div>
    </div>
  )
}

export default Card