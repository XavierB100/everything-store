import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HistoryPage() {
    const timeline = [
        { year: '13.8 Billion BC', event: 'The Big Bang. We were there. We were the Bang.' },
        { year: '4.5 Billion BC', event: 'Earth forms. We acquire the mineral rights.' },
        { year: '2000 BC', event: 'The Wheel is invented. We sue for patent infringement.' },
        { year: '1990', event: 'The Internet is born. We reserve the domain everything.com (and forget to renew it).' },
        { year: '2024', event: 'The Everything Store launches. The universe is finally complete.' },
        { year: '3000', event: 'We acquire the concept of Time. Tuesdays are now illegal.' },
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">OUR HISTORY</h1>
                </ScrollReveal>

                <div className="space-y-12 border-l-2 border-surface pl-8 ml-4">
                    {timeline.map((item, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-2 w-5 h-5 bg-accent rounded-full border-4 border-background"></div>
                                <h3 className="text-4xl font-display font-bold mb-2">{item.year}</h3>
                                <p className="text-xl text-gray-500">{item.event}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
