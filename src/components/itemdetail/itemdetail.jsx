const ItemDetail = ({id,price,name,img,category}) => {
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
                    Categoria: {category}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail