
import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function Slideshow({ data }) {
  const [animalIndex, setAnimalIndex] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(2500)
  const timer = useRef(null)

  const animal = data.animals[animalIndex]
  const current = animal.images[imageIndex]

  const nextImage = () => {
    setImageIndex((i) => (i + 1) % animal.images.length)
  }

  const prevImage = () => {
    setImageIndex((i) => (i - 1 + animal.images.length) % animal.images.length)
  }

  useEffect(() => {
    if (!isPlaying) return
    timer.current = setInterval(() => {
      setImageIndex((i) => (i + 1) % animal.images.length)
    }, speed)
    return () => clearInterval(timer.current)
  }, [isPlaying, speed, animalIndex])

  // Reset image when switching animal
  useEffect(() => setImageIndex(0), [animalIndex])

  return (
    <div className="card">
      <div className="toolbar" style={{justifyContent:'space-between', marginBottom:12}}>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <button onClick={() => setIsPlaying(p => !p)} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '⏸ Pause' : '▶️ Play'}
          </button>
          <button onClick={prevImage} aria-label="Previous image">⟵ Prev</button>
          <button onClick={nextImage} aria-label="Next image">Next ⟶</button>
        </div>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <label htmlFor="speed">Speed</label>
          <input id="speed" type="range" min="1200" max="6000" step="100" value={speed}
            onChange={e => setSpeed(parseInt(e.target.value))} />
          <select value={animalIndex} onChange={e => setAnimalIndex(parseInt(e.target.value))}>
            {data.animals.map((a, idx) => (
              <option key={a.name} value={idx}>{a.name}</option>
            ))}
          </select>
        </div>
      </div>

      <figure className="figure">
        <img src={current.url} alt={`${animal.name}`} />
        <figcaption className="badge">
          {animal.name} • <small><em>{animal.scientificName}</em></small>
        </figcaption>
      </figure>

      <div className="caption">
        <div>Fun fact: {animal.fact}</div>
        <div style={{fontSize:12}}>Credit: {current.credit}</div>
      </div>
    </div>
  )
}
