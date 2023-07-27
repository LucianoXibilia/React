
import { Item } from '../item/item'

export const itemList = ({products})=>{
    return(
        <div>
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </div>
    )
}