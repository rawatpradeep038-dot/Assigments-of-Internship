// src/app/page.tsx

import Link from 'next/link';

/**
 * Home page component
 * Displayed at the root route "/"
 */
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Blog Explorer
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Discover amazing blog posts, read inspiring stories, and explore 
          content from talented writers around the world.
        </p>

        {/* Call to Action Button */}
        <Link 
          href="/blogs"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Explore Blogs →
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold mb-2">100+ Posts</h3>
          <p className="text-gray-600">Explore a vast collection of blog posts</p>
        </div>

        <div className="text-center p-6">
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-xl font-bold mb-2">Talented Authors</h3>
          <p className="text-gray-600">Read content from amazing writers</p>
        </div>

        <div className="text-center p-6">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">Fast & Modern</h3>
          <p className="text-gray-600">Built with the latest technologies</p>
        </div>
      </div>
    </div>
  );
}