export const Item = ({id,name,price,img})=>{
    
    return(
        <div className="produ__cajas__producto">
            <h3>
                {name}
            </h3>
            <h4>
                {price}
            </h4>
            <img src={img} alt={name} />
            <link to={'/item/${id}'} />
        </div>
    )
}