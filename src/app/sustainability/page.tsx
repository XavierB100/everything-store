import ScrollReveal from '@/components/ui/ScrollReveal';

export default function SustainabilityPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">SUSTAINABILITY</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-12 text-lg text-gray-600 dark:text-gray-300">
                        <section>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">CARBON NEGATIVE? NO. CARBON EVERYTHING.</h2>
                            <p>
                                We don't just reduce our carbon footprint. We embrace it.
                                Carbon is the building block of life. Therefore, by emitting carbon, we are creating life.
                                You're welcome.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">RECYCLING PROGRAM</h2>
                            <p>
                                Send us your old hopes and dreams. We will recycle them into new marketing campaigns.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">OUR PACKAGING</h2>
                            <p>
                                Our "Everything Air" product uses 0% packaging. It is literally just air.
                                It doesn't get more sustainable than that.
                            </p>
                        </section>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
