const products = [
    {id:'1',name:'Labiales Rojos', price: 800, img:'./multimedia./labialesrojos.jpeg'},
    {id:'2',name:'Pack de esmalte', price: 4500, img:'./multimedia./packdeesmalte.jpeg'},
    {id:'3',name:'Pack de pinceles', price: 2600, img:'./multimedia./packdepinceles.jpeg'},
]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })

}

export const getProductById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod=>prod.id === productId))
        }, 500)
    })
}