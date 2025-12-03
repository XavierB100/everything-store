import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AddToCartButton from '@/components/products/AddToCartButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Image Section */}
                    <ScrollReveal width="100%">
                        <div className="relative aspect-square bg-surface rounded-3xl overflow-hidden flex items-center justify-center">
                            {product.images.length > 0 ? (
                                <Image
                                    src={product.images[0]}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-12"
                                    priority
                                />
                            ) : (
                                <div className="text-6xl font-display text-gray-300">
                                    {product.title[0]}
                                </div>
                            )}
                        </div>
                    </ScrollReveal>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center">
                        <ScrollReveal width="100%" delay={0.2}>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">{product.title}</h1>
                            <p className="text-2xl font-light mb-8 text-gray-500">${product.price}</p>
                        </ScrollReveal>

                        <ScrollReveal width="100%" delay={0.3}>
                            <p className="text-lg mb-8 leading-relaxed">{product.description}</p>
                        </ScrollReveal>

                        <ScrollReveal width="100%" delay={0.4}>
                            <div className="flex gap-4 mb-12">
                                <AddToCartButton product={product} />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal width="100%" delay={0.5}>
                            <div className="border-t border-surface pt-8">
                                <h3 className="font-display text-xl mb-4">FEATURES</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Tech Specs */}
                <ScrollReveal width="100%" delay={0.6}>
                    <div className="bg-surface rounded-3xl p-8 md:p-16 mb-20">
                        <h2 className="text-3xl font-display font-bold mb-12">TECH SPECS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {product.specs.map((spec, index) => (
                                <div key={index}>
                                    <h4 className="font-display text-sm text-gray-500 mb-2 uppercase">{spec.label}</h4>
                                    <p className="font-medium">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
