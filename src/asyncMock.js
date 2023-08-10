const products = [
    {id:'1',name:'Labiales Rojos', price: 800, img:'../../multimedia/labialesrojos.jpeg', category:'Rostro'},
    {id:'2',name:'Pack de esmalte', price: 4500, img:'../../multimedia/packdeesmalte.jpeg', category:'Manos'},
    {id:'3',name:'Pack de pinceles', price: 2600, img:'../../multimedia/packdepinceles.jpeg', category:'Rostro'},
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