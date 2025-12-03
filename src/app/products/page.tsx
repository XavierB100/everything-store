import { products } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface PageProps {
    searchParams: Promise<{ search?: string }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
    const { search } = await searchParams;
    const filteredProducts = search
        ? products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        : products;

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4">
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
                                <ProductCard
                                    title={product.title}
                                    price={`$${product.price}`}
                                    image={product.images.length > 0 ? product.images[0] : ''}
                                    href={`/products/${product.slug}`}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
