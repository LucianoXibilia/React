import './cartwidget.css'
export const CartWidget =()=>{
    let cantItems=2
    return(
        <div>
            <img className="imgcarrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360" alt="cartwidget"/>
            <p className='textoCart'>{cantItems}</p>
        </div>
    )
}
