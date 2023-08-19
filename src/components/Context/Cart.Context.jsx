import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext=()=> useContext(CartContext)

export const CartProvider=({children})=>{

    const [cart, setCart]=useState([])

    const addProduct = (item,quantity)=>{
        const element=cart.find((product)=>product.id===item.id)
        if (!element){ 
            setCart([...cart,{...item,quantity}])
        } else{
            const newCart=cart.map((product)=>{
                if(product.id===item.id){
                    return{...product,quantity:product.quantity+quantity}
                }
                return product;
            });
            setCart(newCart)
        }
        
    }

    const getCartQty=()=>cart.reduce((acc,item)=>acc+item.quantity,0)

    const removeProduct=()=>{
        const newCart=cart.filter((product)=>product.id !== id);
        setCart(newCart)
    }

    const cleanCart=() => setCart([]);

    const getTotalPrice=()=> cart.reduce((acc,item)=>acc+item.price*item.quantity,0)

    const value={
        cart,
        addProduct,
        getCartQty,
        removeProduct,
        cleanCart,
        getTotalPrice,
    };


    return <CartContext.Provider value={value} displayName='CartContext'>
        {children}
    </CartContext.Provider>

}






/*
export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])

    console.log(cart)
    const IsInCart = (itemId)=>{
        return cart.some(prod=>prod.id===itemId)
    }
    const addItem =(item, quantity) =>{}
    if(!IsInCart(item.id)){
        setCart(prev=> [...prev, {...item, quantity}])
    }   else {
        console.error('No se agrego')
    }

    const removeItem=(itemId)=>{
        const cartUpdate = cart.filter(prod=> prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    

    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>  
    )
}*/