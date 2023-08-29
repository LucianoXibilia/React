import { useCartContext } from '../Context/Cart.Context'
import './cartwidget.css'

export const CartWidget = () => {
    const {getCartQty}=useCartContext()
    const {getTotalPrice}=useCartContext()
    return(
        <div>
            <img className="imgcarrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360" alt="cartwidget"/>
            <p className='textoCart'>{getCartQty()}</p>
            <span>Precio a pagar {getTotalPrice()}</span>
        </div>
    )
}
