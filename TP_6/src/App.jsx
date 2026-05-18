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
        <h2>Cards</h2>
        <div className="card-grid">
          <Card titulo="UI/UX Design" descripcion="Interfaces modernas y accesibles." imagen="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400" precio={0} />
          <Card titulo="React Dev" descripcion="Componentes reutilizables con hooks." imagen="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" precio={99} />
          <Card titulo="Git & Versioning" descripcion="Control de versiones profesional." imagen="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400" />
          <Card titulo="Vite + React" descripcion="Bundler ultrarrápido con HMR." imagen="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400" precio={0} />
        </div>

        <h2>Contador</h2>
        <Contador />

        <h2>Formulario</h2>
        <ContactForm />

        <h2>Productos</h2>
        <ProductList />

        <h2>To-Do</h2>
        <TodoApp />
      </main>
      <Footer />
    </>
  )
}

export default App