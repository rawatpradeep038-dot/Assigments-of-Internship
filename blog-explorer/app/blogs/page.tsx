// src/app/blogs/page.tsx

import { getAllPosts } from '@/lib/api';
import BlogList from '@/components/BlogList';

/**
 * Blog list page - displays all blog posts
 * This is a Server Component (async)
 * Route: /blogs
 */
export default async function BlogsPage() {
  // Fetch all posts on the server
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          All Blog Posts
        </h1>
        <p className="text-gray-600">
          Discover {posts.length} amazing blog posts
        </p>
      </div>

      {/* Blog List */}
      <BlogList posts={posts} />
    </div>
  );
}