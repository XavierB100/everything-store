import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-display font-bold mb-4 glitch-hover">404</h1>
            <h2 className="text-4xl font-display font-bold mb-8">NOTHING FOUND</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-md">
                You were looking for something, but you found nothing.
                Ironically, that's kind of what we do here.
            </p>
            <Link href="/">
                <Button size="lg">GO BACK TO EVERYTHING</Button>
            </Link>
        </div>
    );
}
