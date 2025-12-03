import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">TERMS OF SERVICE</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="prose prose-lg dark:prose-invert font-light">
                        <h3>1. Acceptance of Everything</h3>
                        <p>By using this site, you accept Everything. And Nothing. Simultaneously.</p>

                        <h3>2. Shipping</h3>
                        <p>We ship when we feel like it. Or when the stars align. Usually the latter.</p>

                        <h3>3. Returns</h3>
                        <p>If you return Everything, do you have Nothing? Think about it.</p>

                        <h3>4. Privacy</h3>
                        <p>We know everything. (Just kidding, we don't even use cookies because they are too cluttered).</p>

                        <h3>5. Liability</h3>
                        <p>We are not liable for any existential crises caused by our products.</p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
