import Item from "../item/item"

const ItemList = ({products}) => {
    return(
        <div>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
//(prod=> <Item key={prod.id} {...prod} />)