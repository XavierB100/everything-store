'use client';

import ProductCard from '../ui/ProductCard';
import ScrollReveal from '../ui/ScrollReveal';

import { products } from '@/lib/products';

export default function ProductHighlight() {
    const featuredProducts = products.filter(p => ['ear-1', 'ear-stick', 'phone-2'].includes(p.slug));

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl md:text-6xl font-display font-bold">LATEST</h2>
                        <a href="/products" className="text-sm font-medium hover:text-accent transition-colors mb-2">VIEW ALL (4)</a>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <ScrollReveal key={product.id} width="100%" delay={index * 0.1}>
                            <div onClick={() => window.location.href = `/everything-store/products/${product.slug}`} className="cursor-pointer">
                                <ProductCard
                                    title={product.title}
                                    price={`$${product.price}`}
                                    image={product.images[0] || ''}
                                    href={`/products/${product.slug}`}
                                />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
