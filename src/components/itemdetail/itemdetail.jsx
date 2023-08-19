import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/Cart.Context"
//import { CartContext } from "../Context/Cart.Context"

const ItemDetail = ({id,price,name,img,category,stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const contexto = useCartContext()
    console.log(contexto)
    const {addProduct} = useCartContext();

    //const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        
        const item={
            id,name,price
        }
        addProduct(item,quantity)
        //addItem(item,quantity)
    }



    return(
        <>
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
        <footer>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart'>Terminar Compra</Link>
                ):(
                    <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            
        </footer>
        </>
    )
}

export default ItemDetail