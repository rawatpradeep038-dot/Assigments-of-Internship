// src/app/blogs/[id]/page.tsx

import { getPostById, getUserById } from '@/lib/api';
import { PageProps } from '@/types/blog';
import Link from 'next/link';

/**
 * Blog detail page - displays a single blog post with author info
 * This is a Server Component (async)
 * Route: /blogs/[id] where [id] is dynamic
 */
export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;  // ✅ Add 'await' here

  // Fetch the post
  const post = await getPostById(id);

  // If post not found, show error
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for doesn't exist.
        </p>
        <Link 
          href="/blogs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  // Fetch the author using the post's userId
  const author = await getUserById(post.userId);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link 
        href="/blogs"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
      >
        ← Back to Blogs
      </Link>

      {/* Blog Post Card */}
      <article className="bg-white rounded-lg shadow-lg p-8">
        {/* Post Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Author Info */}
        {author && (
          <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            {/* Author Avatar (using first letter of name) */}
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              {author.name.charAt(0)}
            </div>
            
            {/* Author Details */}
            <div>
              <p className="font-semibold text-gray-900">{author.name}</p>
              <p className="text-sm text-gray-600">@{author.username}</p>
              <p className="text-sm text-gray-500">{author.email}</p>
            </div>
          </div>
        )}

        {/* Post Body */}
        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {post.body}
          </p>
        </div>

        {/* Author Additional Info */}
        {author && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              About the Author
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Company:</span> {author.company.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Website:</span>{' '}
                  <a 
                    href={`https://${author.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {author.website}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Phone:</span> {author.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">City:</span> {author.address.city}
                </p>
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Navigation to other posts */}
      <div className="mt-8 flex justify-between">
        {parseInt(id) > 1 && (
          <Link 
            href={`/blogs/${parseInt(id) - 1}`}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            ← Previous Post
          </Link>
        )}
        {parseInt(id) < 100 && (
          <Link 
            href={`/blogs/${parseInt(id) + 1}`}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 ml-auto transition-colors"
          >
            Next Post →
          </Link>
        )}
      </div>
    </div>
  );
}