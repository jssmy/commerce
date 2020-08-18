export interface IproductResponseItem {
        slug: string;
        sku: string;
        title: string;
        description: string;
        manufacture_details: IManufactureDetail;
        shipping_details: IShippingDetail;
        categories: ICategory[];
        quantity: number;
        pricing: IPricing;
        images: IImage[];
}

export interface IManufactureDetail {
    model_number: string;
    release_date: string;
}

export interface IShippingDetail {
    weight: number;
    width: number;
    height: number;
    depth: number;
}

export interface IPricing {
    price: number;
}

export interface ICategory {
    category: string;
}

export interface IImage {
    image_source: IIMageSource;
    title: string;
}

export interface IIMageSource {
    large_src: string;
    medium_src: string;
    small_src: string;
}
