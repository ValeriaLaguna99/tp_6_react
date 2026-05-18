import { useState } from 'react'
import Card from './Card'

const productos = [
  { id: 1, nombre: 'iPhone 15 Pro', precio: 2801299, categoria: 'Electrónica', enStock: true },
  { id: 2, nombre: 'Remera Oversize', precio: 35729, categoria: 'Ropa', enStock: true },
  { id: 3, nombre: 'AirPods Pro', precio: 70249, categoria: 'Electrónica', enStock: false },
  { id: 4, nombre: 'Zapatillas Running', precio: 75119, categoria: 'Ropa', enStock: true },
  { id: 5, nombre: 'MacBook Air M3', precio: 901499, categoria: 'Electrónica', enStock: true },
  { id: 6, nombre: 'Campera Denim', precio: 60999, categoria: 'Ropa', enStock: false },
]

function ProductList() {
  const [categoria, setCategoria] = useState('Todas')
  const [soloStock, setSoloStock] = useState(false)

  const filtered = productos.filter(p => {
    const catOk = categoria === 'Todas' || p.categoria === categoria
    const stockOk = !soloStock || p.enStock
    return catOk && stockOk
  })

  return (
    <div>
      <div className="filters">
        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option>Todas</option>
          <option>Electrónica</option>
          <option>Ropa</option>
        </select>
        <label>
          <input type="checkbox" checked={soloStock} onChange={e => setSoloStock(e.target.checked)} />
          Solo en stock
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No hay productos que coincidan con los filtros.</p>
      ) : (
        <div className="card-grid">
          {filtered.map(p => (
            <Card key={p.id} titulo={p.nombre} descripcion={p.categoria} precio={p.precio}>
              <span className={`stock-badge ${p.enStock ? 'en' : 'sin'}`}>
                {p.enStock ? 'En stock' : 'Sin stock'}
              </span>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
