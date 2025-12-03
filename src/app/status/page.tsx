import ScrollReveal from '@/components/ui/ScrollReveal';

export default function StatusPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">SYSTEM STATUS</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between bg-surface p-6 rounded-2xl">
                            <span className="font-bold">WEBSITE</span>
                            <span className="text-green-500 font-mono">OPERATIONAL</span>
                        </div>
                        <div className="flex items-center justify-between bg-surface p-6 rounded-2xl">
                            <span className="font-bold">CHECKOUT</span>
                            <span className="text-green-500 font-mono">TAKING MONEY</span>
                        </div>
                        <div className="flex items-center justify-between bg-surface p-6 rounded-2xl">
                            <span className="font-bold">REALITY</span>
                            <span className="text-yellow-500 font-mono">UNSTABLE</span>
                        </div>
                        <div className="flex items-center justify-between bg-surface p-6 rounded-2xl">
                            <span className="font-bold">VIBES</span>
                            <span className="text-green-500 font-mono">IMMACULATE</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
