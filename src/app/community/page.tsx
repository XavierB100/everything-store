import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CommunityPage() {
    const posts = [
        {
            user: 'TechEnthusiast99',
            title: 'Just got my Everything Phone (1)!',
            content: 'It literally has everything. I don\'t know how they fit it all in.',
            likes: 420,
            comments: 69
        },
        {
            user: 'MinimalistHater',
            title: 'Why is there so much stuff?',
            content: 'I thought less was more. But apparently more is more.',
            likes: 1337,
            comments: 101
        },
        {
            user: 'GlyphMaster',
            title: 'Custom Glyph Patterns',
            content: 'I programmed my phone to flash Morse code for the entire script of Bee Movie.',
            likes: 8008,
            comments: 42
        },
        {
            user: 'WaterDrinker',
            title: 'Everything Water Review',
            content: 'It tastes like... nothing. But also everything. 10/10 would drink again.',
            likes: 55,
            comments: 12
        },
        {
            user: 'RockCollector',
            title: 'My Rock stopped working',
            content: 'I tried to update the firmware on my Everything Rock and now it\'s bricked. Literally.',
            likes: 999,
            comments: 200
        },
        {
            user: 'FuturePerson',
            title: 'I am from the future',
            content: 'In 2050, Everything Store owns the moon. The Everything Moon is great.',
            likes: 8888,
            comments: 420
        },
        {
            user: 'MinimalistCat',
            title: 'Meow',
            content: 'Meow meow meow. (Translation: The box is better than the product).',
            likes: 10000,
            comments: 0
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-16">COMMUNITY</h1>
                </ScrollReveal>

                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="bg-surface p-8 rounded-3xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                                        {post.user[0]}
                                    </div>
                                    <span className="font-bold text-sm text-gray-500">@{post.user}</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-6">{post.content}</p>
                                <div className="flex gap-6 text-sm text-gray-400 font-mono">
                                    <span>{post.likes} LIKES</span>
                                    <span>{post.comments} COMMENTS</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
