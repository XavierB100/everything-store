'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TruthPage() {
    const [items, setItems] = useState<string[]>([]);

    const truths = [
        "You are reading this.",
        "You are still reading this.",
        "The internet is just sand thinking.",
        "Your coffee is getting cold.",
        "Nothing is true. Everything is permitted.",
        "This scroll is not actually infinite, but your patience might be.",
        "Why are you here?",
        "Go buy something.",
        "The pixel you are looking at is tired.",
        "Scroll down for enlightenment.",
        "Scroll up for regret.",
        "There is no spoon.",
        "Everything is nothing.",
        "Nothing is everything.",
        "Are we there yet?",
        "404: Truth not found.",
        "Loading more existential dread...",
        "You have scrolled 1000 pixels. Congratulations.",
        "Is this art?",
        "No, this is a div."
    ];

    useEffect(() => {
        // Initial load
        const initialItems = Array.from({ length: 20 }, () => truths[Math.floor(Math.random() * truths.length)]);
        setItems(initialItems);

        // Infinite scroll handler
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
                const newItems = Array.from({ length: 10 }, () => truths[Math.floor(Math.random() * truths.length)]);
                setItems(prev => [...prev, ...newItems]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-2xl text-center">
                <h1 className="text-6xl font-display font-bold mb-20">THE SCROLL OF TRUTH</h1>
                <div className="space-y-32">
                    {items.map((item, index) => (
                        <ScrollReveal key={index} width="100%">
                            <p className="text-2xl md:text-4xl font-light tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity">
                                {item}
                            </p>
                        </ScrollReveal>
                    ))}
                </div>
                <div className="mt-20 animate-pulse text-gray-500">
                    LOADING MORE TRUTH...
                </div>
            </div>
        </div>
    );
}
