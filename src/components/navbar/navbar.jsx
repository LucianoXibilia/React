import './navbar.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { CartWidget } from '../cartwidget/cartwidget'
export const NavBar = () =>{
    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        
                        <NavLink to='/' className="navbar-brand animate__animated animate__zoomIn">Oxali´s Partners</NavLink>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/item' className="nav-link">Productos</NavLink>
                                </li>
                            </ul>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

/*
<a className="navbar-brand animate__animated animate__zoomIn" href="#"></a>
<a className="nav-link" href="./Paginas/Productos.html">Productos</a>
<li className="nav-item">
                                <a className="nav-link" href="./Paginas/Ofertas.html">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Paginas/Contactos.html">Contactos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Paginas/Nosotros.html">Nosotros</a>
                            </li>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

*/