/*const products = [
    {id:'1',name:'Labiales Rojos', price: 800, img:'../../multimedia/labialesrojos.jpeg', category:'Rostro', stock:10},
    {id:'2',name:'Pack de esmalte', price: 4500, img:'../../multimedia/packdeesmalte.jpeg', category:'Manos', stock:10},
    {id:'3',name:'Pack de pinceles', price: 2600, img:'../../multimedia/packdepinceles.jpeg', category:'Rostro', stock:10},
]*/
import { collection, getDocs, getDoc,addDoc, where, query } from "firebase/firestore";
import { db } from "./lib/config";

const itemsRef=collection(db,"items")


export const getProducts = async () => {
    /*return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
    */

    let products=[];

    const querrySnapshot= await getDocs(itemsRef)

    querrySnapshot.forEach((doc)=>{
        products=[...products,{ ...doc.data(), id: doc.id}]
    })

    return products;
};
export const getProductById = async (id)=>{
    const document = doc(db,"items",id)
    const docSnap = await getDoc(document)
    if (docSnap.exist())return{id: docSnap.id, ...docSnap.data()};
    
    return null;
}

/*
export const getProductById = async (productid) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod=>prod.id === productId))
        }, 500)
    })
}*/