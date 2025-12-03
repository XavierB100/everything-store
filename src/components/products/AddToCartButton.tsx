'use client';

import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import Button from '../ui/Button';

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <Button size="lg" fullWidth onClick={() => addToCart(product)}>
            ADD TO CART
        </Button>
    );
}
