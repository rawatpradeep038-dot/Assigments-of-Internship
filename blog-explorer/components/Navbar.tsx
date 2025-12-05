// src/components/Navbar.tsx

import Link from 'next/link';

/**
 * Navigation bar component
 * Displayed at the top of every page
 */
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-2xl font-bold hover:text-blue-200 transition-colors"
          >
            Blog Explorer
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blogs" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}