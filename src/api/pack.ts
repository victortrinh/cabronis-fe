import { ThemeEnum } from "./enum/themeEnum";

export type Pack = {
    id: string;
    name: string;
    image_str: string;
    description: string;
    stock: number;
    price: number;
    theme: ThemeEnum;
};