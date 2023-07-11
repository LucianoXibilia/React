import { Item } from "./item/item"
export const ItemListContainer = ({obj}) =>{
    return(
        <div >
            <div className="container">
                {obj}
                <Item />
            </div>
        </div>
    )
}