'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "I wish I thought of this. It's so... everything.",
            author: "Elon M.",
            title: "CEO of Something"
        },
        {
            quote: "The design is cleaner than a freshly wiped hard drive.",
            author: "Tim C.",
            title: "Fruit Enthusiast"
        },
        {
            quote: "I tried to buy the 'Everything Nothing' but my card was declined. 10/10 experience.",
            author: "Mark Z.",
            title: "Metaverse Explorer"
        }
    ];

    return (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">WHAT PEOPLE SAY</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="bg-background p-8 rounded-3xl h-full flex flex-col justify-between">
                                <p className="text-xl md:text-2xl font-light mb-8">"{t.quote}"</p>
                                <div>
                                    <p className="font-bold">{t.author}</p>
                                    <p className="text-sm text-gray-500">{t.title}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
