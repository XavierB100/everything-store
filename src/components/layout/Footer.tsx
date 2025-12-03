'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-surface py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div>
                        <h3 className="font-display text-lg mb-4">SHOP</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-sm text-gray-500 hover:text-foreground">ALL PRODUCTS</Link></li>
                            <li><Link href="/products/phone-2" className="text-sm text-gray-500 hover:text-foreground">PHONE (2)</Link></li>
                            <li><Link href="/products/ear-stick" className="text-sm text-gray-500 hover:text-foreground">EAR (STICK)</Link></li>
                            <li><Link href="/products/everything-pet" className="text-sm text-gray-500 hover:text-foreground">EVERYTHING PET</Link></li>
                            <li><Link href="/products/everything-nothing" className="text-sm text-gray-500 hover:text-foreground">NOTHING</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-lg mb-4">ABOUT</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm text-gray-500 hover:text-foreground">STORY</Link></li>
                            <li><Link href="/history" className="text-sm text-gray-500 hover:text-foreground">HISTORY</Link></li>
                            <li><Link href="/sustainability" className="text-sm text-gray-500 hover:text-foreground">SUSTAINABILITY</Link></li>
                            <li><Link href="/investors" className="text-sm text-gray-500 hover:text-foreground">INVESTORS</Link></li>
                            <li><Link href="/careers" className="text-sm text-gray-500 hover:text-foreground">CAREERS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-lg mb-4">SUPPORT</h3>
                        <ul className="space-y-2">
                            <li><Link href="/support#faq" className="text-sm text-gray-500 hover:text-foreground">HELP CENTER</Link></li>
                            <li><Link href="/support#contact" className="text-sm text-gray-500 hover:text-foreground">CONTACT US</Link></li>
                            <li><Link href="/warranty" className="text-sm text-gray-500 hover:text-foreground">WARRANTY</Link></li>
                            <li><Link href="/status" className="text-sm text-gray-500 hover:text-foreground">SYSTEM STATUS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-lg mb-4">COMMUNITY</h3>
                        <ul className="space-y-2">
                            <li><Link href="/community" className="text-sm text-gray-500 hover:text-foreground">COMMUNITY</Link></li>
                            <li><Link href="/journal" className="text-sm text-gray-500 hover:text-foreground">JOURNAL</Link></li>
                            <li><Link href="/do-nothing" className="text-sm text-gray-500 hover:text-foreground">DO NOTHING</Link></li>
                            <li><Link href="/truth" className="text-sm text-gray-500 hover:text-foreground">THE TRUTH</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-lg mb-4">LEGAL</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-foreground">PRIVACY POLICY</Link></li>
                            <li><Link href="/terms" className="text-sm text-gray-500 hover:text-foreground">TERMS OF SERVICE</Link></li>
                            <li><Link href="/terms-of-sales" className="text-sm text-gray-500 hover:text-foreground">TERMS OF SALES</Link></li>
                            <li><Link href="/legal" className="text-sm text-gray-500 hover:text-foreground">LEGAL INFO</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface">
                    <p className="text-xs text-gray-400">© {new Date().getFullYear()} EVERYTHING TECHNOLOGY LIMITED</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <span className="text-xs text-gray-600">EST. 13.8 BILLION BC</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
