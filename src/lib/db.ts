import db from '@/db/db.json';

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

export interface Post {
    id: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

export interface Database {
    products: Product[];
    posts: Post[];
}

export function getDb(): Database {
    return db as Database;
}

export function getProducts(): Product[] {
    const db = getDb();
    return db.products;
}

export function getProductBySlug(slug: string): Product | undefined {
    const products = getProducts();
    return products.find((p) => p.slug === slug);
}

export function getPosts(): Post[] {
    const db = getDb();
    return db.posts;
}

export function getPostBySlug(slug: string): Post | undefined {
    const posts = getPosts();
    return posts.find((p) => p.slug === slug);
}
