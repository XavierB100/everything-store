import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">LEGAL</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            Everything Technology Limited is a registered entity in the Metaverse.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">TRADEMARKS</h2>
                        <p>
                            "Everything", "Nothing", "Something", and "Anything" are all trademarks of our imagination.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">DISCLAIMER</h2>
                        <p>
                            We are not responsible for any existential crises caused by our products.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
