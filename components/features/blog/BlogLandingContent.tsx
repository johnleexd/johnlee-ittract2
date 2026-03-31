import Link from "next/link";
import { BLOG_POSTS } from "@/constant/blog";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { BackButton } from "@/components/common/BackButton";

export function BlogLandingContent() {
  return (
    <Section className="mt-10 px-4 sm:px-6 lg:px-8">
      <BackButton />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Blog</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Explore Next.js Blog Routes
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-3xl">
              This demo includes three dynamic routes: <code className="font-mono">[slug]</code>, <code className="font-mono">[...slug]</code>, and <code className="font-mono">[[...slug]]</code>. Use the cards below and the recent posts to navigate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/blog" className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition">
                Latest Posts
              </Link>
              <Link href="/blog/date" className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition">
                Date Archives
              </Link>
              <Link href="/blog/category" className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition">
                Category View
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-slate-800 via-indigo-800 to-cyan-800 text-white p-6">
              <h2 className="text-xl font-bold">Dynamic Route Explorer</h2>
              <p className="mt-2 text-sm text-blue-100">Quick access to all dynamic routing patterns used in this blog demo.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 p-4">
              <Link href="/blog/getting-started-with-nextjs" className="block p-3 rounded-lg bg-white border border-primary/20 hover:bg-primary/5 transition">
                <p className="text-sm font-semibold">[slug]</p>
                <p className="text-xs text-muted-foreground mt-1">Single post route</p>
              </Link>
              <Link href="/blog/category/nextjs" className="block p-3 rounded-lg bg-white border border-blue-200 hover:bg-blue-50 transition">
                <p className="text-sm font-semibold">[...slug]</p>
                <p className="text-xs text-muted-foreground mt-1">Category route</p>
              </Link>
              <Link href="/blog/date/2024/01" className="block p-3 rounded-lg bg-white border border-purple-200 hover:bg-purple-50 transition">
                <p className="text-sm font-semibold">[[...slug]]</p>
                <p className="text-xs text-muted-foreground mt-1">Date archive route</p>
              </Link>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group p-6 border border-slate-200 rounded-2xl hover:shadow-2xl transition-shadow bg-white h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex gap-1 flex-wrap">
                      {post.category.map((cat) => (
                        <Badge key={cat} variant="secondary">{cat}</Badge>
                      ))}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                  <span className="mt-auto text-sm text-primary font-medium">Read more →</span>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}