import ScrollReveal from '@/components/ui/ScrollReveal';

export default function WarrantyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">WARRANTY</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">LIMITED LIFETIME WARRANTY</h2>
                        <p>
                            We guarantee that our products exist. Mostly.
                            If your product ceases to exist, please contact us immediately.
                        </p>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">EXCLUSIONS</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Damage caused by looking at the product too intensely.</li>
                            <li>Damage caused by existential dread.</li>
                            <li>Damage caused by using the product for its intended purpose.</li>
                            <li>Acts of God, or acts of Dog.</li>
                        </ul>
                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">CLAIM PROCESS</h2>
                        <p>
                            To make a claim, please shout your grievance into the void.
                            If the void answers back, your claim has been approved.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
