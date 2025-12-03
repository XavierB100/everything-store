'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { href: '/products', label: 'PRODUCTS' },
        { href: '/about', label: 'ABOUT' },
        { href: '/journal', label: 'JOURNAL' },
        { href: '/community', label: 'COMMUNITY' },
        { href: '/support', label: 'SUPPORT' },
    ];

    return (
        <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 hover:text-accent transition-colors">
                <Menu size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[100] h-screen w-screen bg-black text-white flex flex-col items-center justify-center"
                    >
                        <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 hover:text-accent transition-colors">
                            <X size={24} />
                        </button>

                        <nav className="flex flex-col space-y-8 mt-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className="text-4xl font-display font-bold hover:text-accent transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
