
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../asyncMock"


export const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts()
            .then(response=> {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },)

    return(
        <div>
            <h1>{greeting}</h1>
            <itemList products={products} />
        </div>
    )
}