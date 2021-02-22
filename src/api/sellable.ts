import { ThemeEnum } from "./enum/themeEnum";

export type Sellable = {
    sellable_id: string;
    name: string;
    image_path: string;
    description: string;
    stock: number;
    price: number;
    theme: ThemeEnum;
    category?: string,
    team?: string;
};