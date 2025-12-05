// src/components/BlogList.tsx

import { Post } from '@/types/blog';
import BlogCard from './BlogCard';

/**
 * Props for BlogList component
 */
interface BlogListProps {
  posts: Post[];  // Array of posts
}

/**
 * Displays a grid of blog post cards
 * @param posts - Array of blog posts to display
 */
export default function BlogList({ posts }: BlogListProps) {
  // If no posts, show message
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}