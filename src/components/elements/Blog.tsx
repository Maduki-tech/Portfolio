import { Badge } from "../ui/badge";

type Post = {
    id: number;
    title: string;
    href: string;
    description: string;
    date: string;
    datetime: string;
    category: {
        title: string;
    };
};

const posts: Post[] = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "#",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing" },
    },
];

export default function Example() {
    return (
        <div className="bg-white py-8 sm:py-12">
            <div className="px-6 lg:px-8">
                <div className="">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Personal Blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learning and giving advice on software development, vim, and other tools.
                    </p>
                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-4 sm:mt-8 sm:pt-8">
                        {posts.map((post) => (
                            <BlogPost key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlogPost({ post }: { post: Post }) {
    return (
        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                </time>
                <Badge>{post.category.title}</Badge>
            </div>
            <div className="flex gap-x-4 pt-2">
                <div className="h-40 w-full rounded-full bg-red-200"></div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                    </p>
                </div>
            </div>
        </article>
    );
}
