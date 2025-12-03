import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TermsOfSalesPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">TERMS OF SALES</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">PAYMENT</h2>
                        <p>
                            We accept money. All of it.
                            If you have money, we want it.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">SHIPPING</h2>
                        <p>
                            We ship to everywhere. Eventually.
                            Please allow 5-500 business days for delivery.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">RETURNS</h2>
                        <p>
                            No returns. Once you have Everything, you can't go back to having nothing.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
