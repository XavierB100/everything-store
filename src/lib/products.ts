import { getProducts } from './db';

export interface Product {
    id: string;
    slug: string;
    title: string;
    price: number;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    images: string[];
}

export const products = getProducts();

