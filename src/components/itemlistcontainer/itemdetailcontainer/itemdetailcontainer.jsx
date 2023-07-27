
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../../asyncMock"


export const ItemDetailContainer = ({greeting}) =>{
    const [products, setProducts] = useState([null])

    const {itemId} =useParams()

    useEffect(()=> {
        getProductsById(itemId)
            .then(response=> {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div>
            <itemDetail {...product} />
        </div>
    )
}