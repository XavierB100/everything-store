'use client';

import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function CheckoutPage() {
    const { items, total } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-display font-bold mb-6">YOUR CART IS EMPTY</h1>
                <p className="text-gray-500 mb-8">You can't checkout with nothing. You need Everything.</p>
                <Link href="/products">
                    <Button size="lg">SHOP EVERYTHING</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">CHECKOUT</h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <ScrollReveal width="100%" delay={0.1}>
                        <div className="bg-surface p-8 rounded-3xl">
                            <h2 className="text-2xl font-display font-bold mb-8">SHIPPING DETAILS</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold mb-2 uppercase text-gray-500">First Name</label>
                                        <input type="text" className="w-full bg-background border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold mb-2 uppercase text-gray-500">Last Name</label>
                                        <input type="text" className="w-full bg-background border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-2 uppercase text-gray-500">Address</label>
                                    <input type="text" className="w-full bg-background border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold mb-2 uppercase text-gray-500">City</label>
                                        <input type="text" className="w-full bg-background border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold mb-2 uppercase text-gray-500">Postal Code</label>
                                        <input type="text" className="w-full bg-background border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <Button fullWidth size="lg" onClick={async (e) => {
                                        e.preventDefault();
                                        const res = await fetch('/api/orders', {
                                            method: 'POST',
                                            body: JSON.stringify({ items, total }),
                                        });
                                        if (res.ok) {
                                            alert('ORDER PLACED. YOU NOW OWN EVERYTHING (THAT YOU BOUGHT).');
                                            window.location.href = '/';
                                        }
                                    }}>PAY ${total}</Button>
                                </div>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Order Summary */}
                    <ScrollReveal width="100%" delay={0.2}>
                        <div className="bg-surface p-8 rounded-3xl h-fit">
                            <h2 className="text-2xl font-display font-bold mb-8">ORDER SUMMARY</h2>
                            <div className="space-y-4 mb-8">
                                {items.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div>
                                            <p className="font-bold">{item.title}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p>${item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-300 dark:border-gray-700 pt-4 flex justify-between items-center text-xl font-bold">
                                <span>TOTAL</span>
                                <span>${total}</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
