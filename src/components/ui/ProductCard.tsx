import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { getImagePath } from '@/lib/utils';

interface ProductCardProps {
    title: string;
    price: string;
    image: string;
    href: string;
}

export default function ProductCard({ title, price, image, href }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col bg-surface p-6 rounded-2xl transition-all hover:shadow-lg">
            <div className="relative aspect-square mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center">
                {/* Placeholder for now if image fails, or use actual image */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 font-display text-4xl">
                    E
                </div>
                {image && (
                    <Image
                        src={getImagePath(image)}
                        alt={title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                )}
            </div>

            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-display text-xl mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm font-medium">{price}</p>
                </div>
            </div>

            <div className="mt-auto">
                <Link href={href} className="block">
                    <Button variant="secondary" fullWidth size="sm">
                        LEARN MORE
                    </Button>
                </Link>
            </div>
        </div>
    );
}
