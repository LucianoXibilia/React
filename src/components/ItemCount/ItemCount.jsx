import { useState } from "react"

const ItemCount = ({stock,inicial,onAdd})=>{
    const [quantity, setQuantity] = useState(inicial)

    const increment=()=>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement=()=>{
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>{stock}</div>
            <div>
                <button onClick={()=>onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount