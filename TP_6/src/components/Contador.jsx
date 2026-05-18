import { useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  return (
    <div className="contador">
      <span style={{ color: count === 0 ? 'var(--danger)' : 'var(--accent)' }}>
        {count}
      </span>
      <div className="btns">
        <button onClick={() => setCount(c => Math.max(0, c - 1))} disabled={count === 0}>−1</button>
        <button onClick={() => setCount(c => c + 1)}>+1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Contador