import { getPosts } from '@/lib/db';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function JournalPage() {
    const posts = getPosts();

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">JOURNAL</h1>
                </ScrollReveal>

                <div className="grid gap-12">
                    {posts.map((post, index) => (
                        <ScrollReveal key={post.id} width="100%" delay={index * 0.1}>
                            <Link href={`/journal/${post.slug}`} className="block group">
                                <article className="border-b border-surface pb-12">
                                    <div className="flex justify-between items-baseline mb-4">
                                        <span className="text-sm font-mono text-gray-500">{post.date}</span>
                                        <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">READ MORE</span>
                                    </div>
                                    <h2 className="text-4xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                                    <p className="text-xl text-gray-600 font-light">{post.excerpt}</p>
                                </article>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
