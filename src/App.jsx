import { useState } from 'react'
import './App.css'
import BusinessCard from './components/BusinessCard'
import BusinessCards from './BusinessCardData'

function App() {

  return (
      <div>
      <p>hello world!</p>
      {BusinessCards.map((card) => (<BusinessCard key={card.Email} {...card}/>))}
      </div>
  )
}

export default App
