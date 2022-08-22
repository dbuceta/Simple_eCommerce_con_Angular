export interface Producto{
    id:string;
    site_id:string;
    title:string;
    seller_id:number;
    use_thumbnail_id: boolean;
    category_id?: string;
    official_store_id: number;
    price: number;
    base_price: number;
    thumbnail: string;
    seller_address:{
        id:string;
        comment:string
    }
    attributes:[
        {
            [k:string]:string | number
        }
    ]
}

export interface ResponseProducto{
    site_id:string;
    query?:string;
    results:Producto[]
}