import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">PRIVACY POLICY</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            We collect everything. Your data, your thoughts, your dreams.
                            Just kidding. We collect nothing. Because we are Everything.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">DATA COLLECTION</h2>
                        <p>
                            We don't even have a database for your personal info.
                            We write your orders on sticky notes and lose them immediately.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">COOKIES</h2>
                        <p>
                            We love cookies. Chocolate chip, oatmeal raisin.
                            Oh, you mean digital cookies? Yeah, we have those too.
                            They track how much you love Everything.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
