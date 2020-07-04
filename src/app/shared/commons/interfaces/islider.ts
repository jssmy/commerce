export interface Islider {
    title_top?: string;
    title: string;
    description?: string;
    image: string;
    button?: IButtonSlider;
    state: string;
}

export interface IButtonSlider {
    text: string;
    href: string;
}

