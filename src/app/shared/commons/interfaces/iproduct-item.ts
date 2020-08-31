import { IImage, ICategory } from './iproduct-response-item';

export interface IproductItem {
    id?: string;
    slug: string;
    title: string;
    shortTitle: string;
    description: string;
    price: number; // current price (with disccount)
    images: IImage[];
    categories: ICategory[];
    store: IStore;
    createdDateHuman: string;
    update: number;
    created: number;
}

export interface ISliderProductItem extends IproductItem {
    state: string;
}

interface IStore {
    name: string;
    href: string;
}
