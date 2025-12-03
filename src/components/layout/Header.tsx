'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import MobileMenu from './MobileMenu';

export default function Header() {
    const { toggleCart, items } = useCart();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-display font-bold tracking-wider glitch-hover">
                    EVERYTHING
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/products" className="text-sm font-medium hover:text-accent transition-colors">
                        PRODUCTS
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                        ABOUT
                    </Link>
                    <Link href="/journal" className="text-sm font-medium hover:text-accent transition-colors">
                        JOURNAL
                    </Link>
                    <Link href="/community" className="text-sm font-medium hover:text-accent transition-colors">
                        COMMUNITY
                    </Link>
                    <Link href="/support" className="text-sm font-medium hover:text-accent transition-colors">
                        SUPPORT
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <form action="/products" className="hidden md:block relative">
                        <input
                            type="text"
                            name="search"
                            placeholder="SEARCH EVERYTHING..."
                            className="bg-surface/50 border-none rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-accent outline-none w-48 transition-all focus:w-64"
                        />
                    </form>
                    <button onClick={toggleCart} className="p-2 hover:text-accent transition-colors relative">
                        <ShoppingBag size={20} />
                        {items.length > 0 && (
                            <span className="absolute top-0 right-0 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {items.length}
                            </span>
                        )}
                    </button>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
