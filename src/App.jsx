
import React, { useEffect, useState } from 'react'
import Slideshow from './components/Slideshow.jsx'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/animals.json')
        if (!res.ok) throw new Error('Failed to load animals.json')
        const json = await res.json()
        setData(json)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 className="title">Lions • Tigers • Bears — Oh My!</h1>
          <p className="subtitle">
            A tiny React slideshow app using public Wikimedia images. No API keys required.
          </p>
        </div>
        <a href="https://github.com/new" target="_blank" rel="noreferrer">
          <button>Use as Template →</button>
        </a>
      </header>

      {loading && <p>Loading…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {data && <Slideshow data={data} />}

      <footer className="footer">
        <p>
          Built with React + Vite. Image assets are hotlinked from Wikimedia Commons (credits shown per image).
        </p>
      </footer>
    </div>
  )
}
