import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constant/blog";
import { BlogCategoryContent } from "@/components/features/blog/BlogCategoryContent";

type Props = { params: Promise<{ slug?: string[] }> };

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const categories = slug || [];

  if (categories.length === 0) {
    // if no category slug, show not found for this pattern
    notFound();
  }

  const mainCategory = categories[0];
  const filteredPosts = BLOG_POSTS.filter((post) =>
    categories.every((cat) => post.category.includes(cat))
  );

  return (
    <BlogCategoryContent
      activeCategories={categories}
      filteredPosts={filteredPosts}
      mainCategory={mainCategory}
    />
  );
}
