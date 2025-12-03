'use client';

import { useCart } from '@/context/CartContext';
import Button from './ui/Button';
import { useState } from 'react';

interface Product {
    id: string;
    slug: string;
    title: string;
    price: number;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    images: string[];
}

export default function BuyEverythingButton() {
    const { addToCart } = useCart();
    const [loading, setLoading] = useState(false);

    const handleBuyEverything = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/products');
            const products: Product[] = await res.json();

            products.forEach(product => {
                addToCart({
                    id: product.id,
                    slug: product.slug,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    features: product.features,
                    specs: product.specs,
                    images: product.images
                });
            });
            alert("YOU HAVE CHOSEN EVERYTHING. GOOD LUCK.");
        } catch (error) {
            console.error("Failed to buy everything:", error);
            alert("FAILED TO BUY EVERYTHING. TRY BUYING SOMETHING.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
            <Button onClick={handleBuyEverything} size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none shadow-2xl animate-pulse">
                {loading ? "BUYING..." : "BUY EVERYTHING"}
            </Button>
        </div>
    );
}
