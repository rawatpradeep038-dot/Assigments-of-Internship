// src/components/BlogCard.tsx

import Link from 'next/link';
import { Post } from '@/types/blog';

/**
 * Props for BlogCard component
 */
interface BlogCardProps {
  post: Post;  // Single post object
}

/**
 * Displays a single blog post card with preview
 * @param post - The blog post to display
 */
export default function BlogCard({ post }: BlogCardProps) {
  // Get first 30 characters of body for preview
  const shortDescription = post.body.substring(0, 30) + '...';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      {/* Post Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
        {post.title}
      </h2>

      {/* Short Description */}
      <p className="text-gray-600 mb-4">
        {shortDescription}
      </p>

      {/* Read More Button */}
      <Link 
        href={`/blogs/${post.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
      >
        Read More →
      </Link>
    </div>
  );
}