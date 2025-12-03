import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CareersPage() {
    const jobs = [
        {
            title: "CHIEF VIBE OFFICER",
            department: "VIBES",
            location: "REMOTE (ASTRAL PLANE)",
            description: "Responsible for ensuring the vibes remain immaculate at all times. Must be able to sense bad energy from a Zoom call."
        },
        {
            title: "DIRECTOR OF NOTHINGNESS",
            department: "PRODUCT",
            location: "LONDON",
            description: "Lead the design of products that do absolutely nothing. Experience with invisible ink and mime artistry preferred."
        },
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">CAREERS</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <p className="text-xl text-gray-600 mb-12">
                        Join us in our mission to create everything out of nothing.
                        We offer competitive salaries (paid in Monopoly money) and unlimited vacation (if you never come back).
                    </p>
                </ScrollReveal>

                <div className="grid gap-8">
                    {jobs.map((job, index) => (
                        <ScrollReveal key={index} width="100%" delay={0.2 + (index * 0.1)}>
                            <div className="bg-surface p-8 rounded-3xl hover:scale-[1.02] transition-transform cursor-pointer group">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                                    <h2 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">{job.title}</h2>
                                    <span className="text-xs font-bold bg-background px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{job.location}</span>
                                </div>
                                <p className="text-xs text-gray-400 mb-4">{job.department}</p>
                                <p className="text-gray-600">{job.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div >
        </div >
    );
}
