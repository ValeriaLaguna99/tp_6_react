import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Contador from './components/Contador'
import ContactForm from './components/ContactForm'
import ProductList from './components/ProductList'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="cards">
          <h2>Promociones</h2>
          <div className="card-grid">
            <Card
              titulo="Tablet Samsung Galaxy"
              descripcion="Pantalla 10.5 pulgadas, 128GB de almacenamiento, ideal para trabajo y entretenimiento."
              imagen="https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400"
              precio={230.349}
            />
            <Card
              titulo="Notebook Lenovo IdeaPad"
              descripcion="Procesador Intel i5, 16GB RAM, 512GB SSD. Perfecta para estudiar y trabajar."
              imagen="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
              precio={1.100799}
            />
            <Card
              titulo="Celular Xiaomi 13"
              descripcion="Cámara 108MP, batería 5000mAh, pantalla AMOLED 6.67 pulgadas."
              imagen="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
              precio={500.499}
            />
            <Card
              titulo="Pantalla LG 27 4K"
              descripcion="Resolución 4K UHD, panel IPS, 144Hz. Ideal para diseño y gaming."
              imagen="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"
              precio={805.429}
            />
          </div>
        </section>

        <section id="contador">
          <h2>Contador</h2>
          <Contador />
        </section>

        <section id="formulario">
          <h2>Formulario</h2>
          <ContactForm />
        </section>

        <section id="productos">
          <h2>Productos</h2>
          <ProductList />
        </section>

        <section id="todo">
          <h2>To-Do</h2>
          <TodoApp />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App