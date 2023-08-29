import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../itemdetail/itemdetail";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const[product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then(response=>{
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
    })

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer