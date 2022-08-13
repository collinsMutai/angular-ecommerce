

export interface Product {
    name:string,
    price:number,
    inStock:boolean,
    url:string,
    sellingAt:number,
    description:string,
    filter?:string
}