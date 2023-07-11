import './navbar.css'
import { CartWidget } from '../cartwidget/cartwidget'
export const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand animate__animated animate__zoomIn" href="#">Oxali´s Partners</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Productos.html">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Ofertas.html">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Contactos.html">Contactos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Nosotros.html">Nosotros</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

