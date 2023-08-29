import { useEffect } from "react"
import { useCartContext } from "../components/Context/Cart.Context"


export const Cart=()=>{
    const {cart,cleanCart,getTotalPrice,removeProduct}=useCartContext();

    useEffect(() => {
        console.log({cart});
    }, [cart]);
    
    return(
        <div>
            <button onClick={cleanCart()}>Vaciar Carrito</button>
            <span>Total {getTotalPrice()}</span>
            {
                cart.map((item)=>(
                    <div key={item.id} onClick={()=>removeProduct(item.id)}> Nombre {item.name} Cantidad {item.quantity}</div>
                ))
            }
        </div>
    )
};