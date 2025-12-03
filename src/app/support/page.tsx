import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">SUPPORT</h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div id="faq">
                        <ScrollReveal width="100%" delay={0.1}>
                            <h2 className="text-2xl font-display font-bold mb-6">FAQ</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold mb-2">Where is my order?</h3>
                                    <p className="text-gray-500">It's everywhere and nowhere. But mostly on its way.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">Do you ship to Mars?</h3>
                                    <p className="text-gray-500">Not yet. We are working on Everything Everywhere.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">What is the return policy?</h3>
                                    <p className="text-gray-500">You can return anything, but why would you want to give up Everything?</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">Is the water gluten-free?</h3>
                                    <p className="text-gray-500">Yes, but it may contain traces of ego.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">My Nothing Phone does something.</h3>
                                    <p className="text-gray-500">That is a defect. Please contact support immediately.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div id="contact">
                        <ScrollReveal width="100%" delay={0.2}>
                            <h2 className="text-2xl font-display font-bold mb-6">CONTACT US</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold mb-2">NAME</label>
                                    <input type="text" className="w-full bg-surface border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">EMAIL</label>
                                    <input type="email" className="w-full bg-surface border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">MESSAGE</label>
                                    <textarea rows={4} className="w-full bg-surface border-none rounded-lg p-3 focus:ring-2 focus:ring-accent outline-none" />
                                </div>
                                <Button fullWidth>SEND MESSAGE</Button>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
