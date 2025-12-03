import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InvestorsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">INVESTORS</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
                        <p className="text-2xl font-bold text-foreground">
                            We are pre-revenue, post-logic, and hyper-scalable.
                        </p>
                        <p>
                            Everything Store is currently valued at ∞ billion dollars.
                            We are disrupting the disruption industry.
                        </p>

                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">OUR BACKERS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-surface p-8 rounded-3xl">
                                <h3 className="font-bold text-xl mb-2">VOID VENTURES</h3>
                                <p className="text-sm text-gray-500">"They sold us nothing, and we bought it."</p>
                            </div>
                            <div className="bg-surface p-8 rounded-3xl">
                                <h3 className="font-bold text-xl mb-2">CAPITAL CAPITAL</h3>
                                <p className="text-sm text-gray-500">"The most investment we've ever invested."</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">FINANCIALS</h2>
                        <div className="font-mono bg-surface p-6 rounded-xl">
                            <p>Q1: 📈 UP</p>
                            <p>Q2: 📉 DOWN (BUT IRONICALLY)</p>
                            <p>Q3: 🚀 MOON</p>
                            <p>Q4: ⬛ [REDACTED]</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
