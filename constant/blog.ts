export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  category: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dynamic-routing-basics",
    title: "Dynamic Routing Basics in Next.js",
    author: "John Lee",
    date: "2024-01-15",
    excerpt: "Learn the fundamentals of dynamic routing in Next.js app router with practical examples.",
    content: "Dynamic routing allows you to create pages that can handle different data based on URL parameters. In Next.js, you can use brackets in folder names to create dynamic routes.",
    category: ["nextjs", "routing"]
  },
  {
    slug: "catch-all-routes",
    title: "Catch-All Routes Explained",
    author: "John Lee",
    date: "2024-01-20",
    excerpt: "Understanding catch-all routes and how they work with multiple path segments.",
    content: "Catch-all routes use [...slug] syntax to match one or more path segments. This is useful for categories, tags, or nested paths.",
    category: ["nextjs", "routing", "advanced"]
  },
  {
    slug: "optional-catch-all",
    title: "Optional Catch-All Routes",
    author: "John Lee",
    date: "2024-01-25",
    excerpt: "How optional catch-all routes work and when to use them.",
    content: "Optional catch-all routes use [[...slug]] syntax and can match zero or more path segments, making them flexible for various routing scenarios.",
    category: ["nextjs", "routing"]
  }
];