// src/lib/api.ts

import { Post, User } from '@/types/blog';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE}/posts`, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts: Post[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post with id: ${id}`);
    }

    const post: Post = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}

export async function getUserById(userId: number): Promise<User | null> {
  try {
    const response = await fetch(`${API_BASE}/users/${userId}`, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user with id: ${userId}`);
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    return null;
  }
}