import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Footer } from './components/footer/footer'
import { NavBar } from './components/navbar/navbar'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import ItemDetail from './components/itemdetail/itemdetail'
import Home from './pages/home'
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcontainer'

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

const routes = createBrowserRouter(
  createRoutesFromElements(
        <Route element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/item' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 Pagina no encontrada</h1>} />
        </Route>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
/* 

<NavBar />
      <ItemListContainer />
      <Footer />



<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
<Route path='/item/:itemId' element={<ItemDetailContainer />} />

const routes = createBrowserRouter(
  createRoutesFromElements(
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 Pagina no encontrada</h1>} />
        </Routes>
  )
)

<header></header>

<ItemListContainer />


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
