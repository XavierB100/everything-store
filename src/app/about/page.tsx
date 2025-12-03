import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">ABOUT US</h1>
                </ScrollReveal>

                <div className="space-y-12 text-lg md:text-xl font-light leading-relaxed">
                    <ScrollReveal width="100%" delay={0.1}>
                        <p>
                            We believe in <span className="font-bold">EVERYTHING</span>.
                            While others try to give you nothing, we give you it all.
                            Every pixel, every feature, every possibility.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.2}>
                        <p>
                            Technology shouldn't be boring. It shouldn't be invisible.
                            It should be loud, proud, and encompass the entire spectrum of existence.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.3}>
                        <div className="p-12 bg-surface rounded-3xl my-12">
                            <h2 className="text-3xl font-display font-bold mb-6">OUR MISSION</h2>
                            <p className="text-gray-600">
                                To remove barriers between people and technology by simply adding more technology.
                                More buttons. More screens. More everything.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.4}>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-display font-bold">THE MANIFESTO</h2>
                            <p>
                                We are tired of "less is more". Less is less. More is more.
                                We want buttons that do nothing. We want screens that display static.
                                We want products that challenge the very definition of utility.
                            </p>
                            <p>
                                When you buy Everything, you are not just buying a product.
                                You are buying a statement. A statement that says, "I have too much money and I appreciate irony."
                            </p>
                            <p>
                                Join us. Consume. Exist. Repeat.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.5}>
                        <div className="space-y-8 mt-20">
                            <h2 className="text-3xl font-display font-bold">OUR TEAM</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-surface p-6 rounded-2xl">
                                    <h3 className="font-bold text-xl">CARL PEI-PER</h3>
                                    <p className="text-sm text-accent mb-2">FOUNDER & CEO</p>
                                    <p className="text-gray-500 text-sm">Visionary. Dreamer. Hasn't slept since 2019.</p>
                                </div>
                                <div className="bg-surface p-6 rounded-2xl">
                                    <h3 className="font-bold text-xl">VOID MASTER</h3>
                                    <p className="text-sm text-accent mb-2">HEAD OF DESIGN</p>
                                    <p className="text-gray-500 text-sm">Believes white space is the only space.</p>
                                </div>
                                <div className="bg-surface p-6 rounded-2xl">
                                    <h3 className="font-bold text-xl">INTERN #404</h3>
                                    <p className="text-sm text-accent mb-2">HEAD OF COFFEE</p>
                                    <p className="text-gray-500 text-sm">We don't know their name. They just appeared one day.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
