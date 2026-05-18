import { useState } from 'react'

let nextId = 1

function TodoApp() {
  const [input, setInput] = useState('')
  const [tareas, setTareas] = useState([
    { id: nextId++, texto: 'Leer la consigna del TP6', completada: true },
    { id: nextId++, texto: 'Crear componentes en React', completada: false },
  ])

  const agregar = () => {
    if (!input.trim()) return
    setTareas([...tareas, { id: nextId++, texto: input.trim(), completada: false }])
    setInput('')
  }

  const toggle = (id) =>
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t))

  const eliminar = (id) => setTareas(tareas.filter(t => t.id !== id))

  const pendientes = tareas.filter(t => !t.completada).length

  return (
    <div className="todo">
      <div className="todo-header">
        <strong>Mis Tareas</strong>
        <span className="todo-badge">{pendientes} pendiente{pendientes !== 1 ? 's' : ''}</span>
      </div>

      <div className="todo-input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && agregar()}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregar} disabled={!input.trim()}>Agregar</button>
      </div>

      {tareas.length === 0 ? (
        <p className="todo-empty">No hay tareas.</p>
      ) : (
        <ul className="todo-list">
          {tareas.map(t => (
            <li key={t.id} className="todo-item">
              <input type="checkbox" checked={t.completada} onChange={() => toggle(t.id)} />
              <span className={t.completada ? 'done' : ''}>{t.texto}</span>
              <button className="btn-del" onClick={() => eliminar(t.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoApp