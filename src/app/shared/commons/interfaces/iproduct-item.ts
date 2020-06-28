export interface IproductItem {
    id: string;
    name: string;
    price: number; // current price (with disccount)
    price_before: number;  // original price // without disccount
    url_img: string
}
