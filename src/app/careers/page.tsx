import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function CareersPage() {
    const jobs = [
        {
            title: "Chief Nothing Officer",
            department: "Executive",
            description: "We need someone to do nothing. Absolutely nothing. If you are good at staring at walls, this is for you.",
            requirements: ["5+ years of doing nothing", "Expertise in silence", "Ability to exist"]
        },
        {
            title: "Director of Everything",
            department: "Operations",
            description: "You will be responsible for everything. The coffee, the code, the weather, the economy. Everything.",
            requirements: ["Must be omnipotent", "Multitasking level: God", "No sleep required"]
        },
        {
            title: "Minimalist Designer",
            department: "Design",
            description: "Design things that are barely there. If we can see it, you failed.",
            requirements: ["Hates colors", "Loves whitespace", "Can draw a perfect dot"]
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">CAREERS</h1>
                    <p className="text-xl text-gray-500 mb-16">Join us in building Everything (and Nothing).</p>
                </ScrollReveal>

                <div className="space-y-12">
                    {jobs.map((job, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="bg-surface p-8 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                    <div>
                                        <h2 className="text-2xl font-display font-bold">{job.title}</h2>
                                        <p className="text-accent font-bold text-sm uppercase">{job.department}</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="mt-4 md:mt-0">APPLY NOW</Button>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{job.description}</p>
                                <div>
                                    <h4 className="font-bold text-sm uppercase mb-2">Requirements:</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-500">
                                        {job.requirements.map((req, i) => (
                                            <li key={i}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
