# Blog Explorer 📚

A modern blog application built with Next.js 15, TypeScript, and Tailwind CSS. Features server-side rendering, dynamic routing, and real-time data fetching from JSONPlaceholder API.

**Deployment Link:** `https://blog-explorer-umber.vercel.app/blogs`

## 🚀 Features

- **Server-Side Rendering** - Fast initial page loads and better SEO
- **Dynamic Routing** - Individual blog post pages with unique URLs
- **TypeScript** - Type-safe code for better development experience
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Clean interface with Tailwind CSS
- **Author Information** - Detailed author profiles for each post

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** JSONPlaceholder (fake REST API)
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project
cd blog-explorer

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── blogs/
│       ├── page.tsx        # Blog list page
│       └── [id]/
│           └── page.tsx    # Individual blog post page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── BlogCard.tsx        # Blog preview card
│   └── BlogList.tsx        # Grid of blog cards
├── types/
│   └── blog.ts             # TypeScript type definitions
└── lib/
    └── api.ts              # API fetching functions
```

## 🌐 Deployment on Vercel

### Method 1: Deploy via GitHub

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects Next.js)

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 🔗 Live Demo



## 📝 API Endpoints Used

- `GET /posts` - Fetch all blog posts
- `GET /posts/:id` - Fetch single blog post
- `GET /users/:id` - Fetch user/author information

## 🎯 Pages

- **/** - Home page with welcome message
- **/blogs** - List of all blog posts
- **/blogs/[id]** - Individual blog post with author details

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📚 What You'll Learn

- Next.js App Router (latest version)
- Server Components and async data fetching
- Dynamic routing with `[id]` parameters
- TypeScript interfaces and type safety
- Tailwind CSS utility classes
- API integration and error handling
- Modern React patterns

## 🐛 Common Issues

**Issue:** `params` error in Next.js 15  
**Fix:** Use `const { id } = await params;` instead of `const { id } = params;`

**Issue:** Module not found  
**Fix:** Ensure all files have correct extensions (`.tsx` for components, `.ts` for utilities)

**Issue:** Styles not applying  
**Fix:** Verify Tailwind is configured in `tailwind.config.js`

## 📄 License

MIT

## 👨‍💻 Author
Pradeep Singh Rawat

Built with ❤️ using Next.js

---

**Need Help?** Check the [Next.js Documentation](https://nextjs.org/docs) or [Vercel Support](https://vercel.com/support)