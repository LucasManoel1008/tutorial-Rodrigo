import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <> 
    <h1>Tutorial pro Rodrigão</h1>

      <Link to={"/formulario"}>
        <h4>Criar Laudo</h4>
      </Link>
    </>
  )
}

export default App
