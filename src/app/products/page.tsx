'use client';

import { products } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ProductList() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search');

    const filteredProducts = search
        ? products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        : products;

    return (
        <>
            <ScrollReveal width="100%">
                <h1 className="text-6xl md:text-8xl font-display font-bold mb-16 text-center">
                    {search ? `SEARCH: ${search.toUpperCase()}` : 'ALL PRODUCTS'}
                </h1>
            </ScrollReveal>

            {filteredProducts.length === 0 ? (
                <div className="text-center text-xl text-gray-500">
                    <p>NOTHING FOUND. MAYBE TRY "EVERYTHING"?</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <ScrollReveal key={product.id} width="100%" delay={index * 0.1}>
                            <div onClick={() => window.location.href = `/everything-store/products/${product.slug}`} className="cursor-pointer">
                                <ProductCard
                                    title={product.title}
                                    price={`$${product.price}`}
                                    image={product.images.length > 0 ? product.images[0] : ''}
                                    href={`/products/${product.slug}`}
                                />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            )}
        </>
    );
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4">
                <Suspense fallback={<div className="text-center">LOADING EVERYTHING...</div>}>
                    <ProductList />
                </Suspense>
            </div>
        </div>
    );
}
