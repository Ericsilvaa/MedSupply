export interface Product {
    id: number;
    code: string;
    name: string;
    image?: string;
    category: string;
    price: number;
    quantity: number;
}

export interface ProductById {
    id: number;
    code: string;
    name: string;
    image?: string;
    price: number;
    category: string;
    description?: string;
    specifications?: { [key: string]: string };
    features?: string[];
    stock?: number;
    manufacturer?: string;
    warranty?: string;
    relatedProducts?: number[];
}
