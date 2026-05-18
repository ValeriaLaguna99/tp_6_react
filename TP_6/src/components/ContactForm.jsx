import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const canSubmit = form.nombre && form.email && form.mensaje

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', form)
  }

  return (
    <div className="form-wrap">
      <form onSubmit={onSubmit}>
        <input name="nombre" value={form.nombre} onChange={handle} placeholder="Nombre" />
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email" />
        <textarea name="mensaje" value={form.mensaje} onChange={handle} placeholder="Mensaje" />
        <button type="submit" disabled={!canSubmit}>Enviar</button>
      </form>

      <div className="preview">
        <h4>Preview en vivo</h4>
        <p><strong>Nombre:</strong> {form.nombre}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Mensaje:</strong> {form.mensaje}</p>
      </div>
    </div>
  )
}

export default ContactForm