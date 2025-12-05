// src/types/blog.ts

// This defines what a blog post object looks like
export interface Post {
  userId: number;      // ID of the user who wrote it
  id: number;          // Unique post ID
  title: string;       // Post title
  body: string;        // Full post content
}

// This defines what a user/author object looks like
export interface User {
  id: number;          // Unique user ID
  name: string;        // Author's full name
  username: string;    // Author's username
  email: string;       // Author's email
  address: {           // Nested address object
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;       // Phone number
  website: string;     // Personal website
  company: {           // Nested company object
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// This defines the props for dynamic route pages
// Next.js automatically passes this to pages in [id] folders
export interface PageProps {
  params: {
    id: string;        // The ID from the URL
  };
}