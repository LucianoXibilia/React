import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Footer } from './components/footer/footer'
import { NavBar } from './components/navbar/navbar'
import { ItemListContainer } from './components/itemlistcontainer/itemlistcontainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ItemDetailContainer } from './components/itemlistcontainer/itemdetailcontainer/itemdetailcontainer'

/*function App(){
  <>
  <NavBar />
  <div>
    holaaa
  </div>
  <Footer />
  </>
}
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      
      <header><NavBar /></header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 Pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer />
      <Footer />
    </>
  )
}
/* 
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/
export default App
