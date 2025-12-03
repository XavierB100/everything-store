import { getPostBySlug, getPosts } from '@/lib/db';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function JournalPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <ScrollReveal width="100%">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-mono text-gray-500 block mb-4">{post.date}</span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">{post.title}</h1>
                    </div>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.2}>
                    <div className="prose prose-lg dark:prose-invert mx-auto font-light leading-relaxed">
                        <p className="text-2xl mb-8 font-normal">{post.excerpt}</p>
                        <div className="whitespace-pre-wrap">{post.content}</div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
