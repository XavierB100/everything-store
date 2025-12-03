import Button from '../ui/Button';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Image
                    src="/hero-phone.png"
                    alt="Everything Phone (1)"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-32">
                <ScrollReveal width="100%">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-6 tracking-tighter">
                        PHONE (1)
                    </h1>
                </ScrollReveal>
                <ScrollReveal width="100%" delay={0.2}>
                    <p className="text-xl md:text-2xl font-light mb-10 tracking-wide text-gray-200">
                        PURE INSTINCT.
                    </p>
                </ScrollReveal>
                <ScrollReveal width="100%" delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="primary" size="lg" className="bg-white text-black hover:bg-gray-200 border-none">
                            LEARN MORE
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                            BUY NOW
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
