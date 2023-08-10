import { NavLink } from "react-router-dom"

const Item =({id, name, img, price}) => {
    
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: {price}
                </p>
            </section>
            <footer>
                <NavLink to={`/item/${id}`}>Ver Detalles</NavLink>
            </footer>
        </article>
    )
}

export default Item
