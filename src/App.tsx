
import { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContext } from './contexts/Auth/AuthContext'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { Home } from './pages/Home'

import { Private } from './pages/Private/intex'

function App() {

  const auth = useContext(AuthContext)

  const handleLogout = () => {
    auth.singout()
  }

  return (
    <div className="App">
      <header>
        <h1>Header Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
          {auth.user ? <Link to="/" onClick={handleLogout} >sair</Link> : <></>}
        </nav>
      </header>
      <hr />
      <div className='conteudo'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/private" element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          } />
        </Routes>
      </div>

    </div>
  )
}

export default App
