// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

// Load Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Blog Explorer',
  description: 'Explore amazing blog posts from around the world',
};

/**
 * Root layout component
 * Wraps all pages in the application
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>© 2024 Blog Explorer. Built with Next.js</p>
        </footer>
      </body>
    </html>
  );
}