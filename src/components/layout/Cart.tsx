'use client';

import { useCart } from '@/context/CartContext';
import { X, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

import { getImagePath } from '@/lib/utils';

export default function Cart() {
    const { items, isOpen, toggleCart, removeFromCart, total } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 border-l border-surface flex flex-col"
                    >
                        <div className="p-6 flex justify-between items-center border-b border-surface">
                            <h2 className="font-display text-xl">CART ({items.length})</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-surface rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                                    <p className="font-display text-lg mb-4">YOUR CART IS EMPTY</p>
                                    <Button onClick={toggleCart} variant="outline">CONTINUE SHOPPING</Button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-24 h-24 bg-surface rounded-xl flex items-center justify-center shrink-0">
                                            {item.images[0] ? (
                                                <Image src={getImagePath(item.images[0])} alt={item.title} fill className="object-contain p-2" />
                                            ) : (
                                                <span className="font-display text-2xl text-gray-300">{item.title[0]}</span>
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-display text-lg">{item.title}</h3>
                                                <p className="text-gray-500">${item.price}</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3 bg-surface rounded-full px-3 py-1">
                                                    <button className="p-1 hover:text-accent"><Minus size={14} /></button>
                                                    <span className="text-sm font-medium">{item.quantity}</span>
                                                    <button className="p-1 hover:text-accent"><Plus size={14} /></button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs text-gray-400 hover:text-red-500 underline"
                                                >
                                                    REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t border-surface bg-background">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-display text-lg">TOTAL</span>
                                    <span className="font-display text-2xl">${total}</span>
                                </div>
                                <Link href="/checkout" onClick={toggleCart}>
                                    <Button fullWidth size="lg">CHECKOUT</Button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
