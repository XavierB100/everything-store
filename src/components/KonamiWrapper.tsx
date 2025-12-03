'use client';

import { useKonamiCode } from '@/hooks/useKonamiCode';
import { useCart } from '@/context/CartContext';

export default function KonamiWrapper({ children }: { children: React.ReactNode }) {
    const { addToCart } = useCart();

    useKonamiCode(() => {
        alert("KONAMI CODE ACTIVATED. UNLOCKING EVERYTHING GOLD.");
        addToCart({
            id: '999',
            slug: 'everything-gold',
            title: 'EVERYTHING GOLD',
            price: 0,
            description: 'You unlocked the secret. You are now the master of Everything.',
            features: ['Gold', 'Shiny', 'Secret'],
            specs: [{ label: 'Material', value: 'Gold' }],
            images: []
        });
        document.documentElement.classList.add('invert');
        setTimeout(() => {
            document.documentElement.classList.remove('invert');
        }, 1000);
    });

    return <>{children}</>;
}
