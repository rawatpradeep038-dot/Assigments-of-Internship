// src/pages/Home.jsx
import { useState } from 'react';

/**
 * Welcome Component
 * Accepts title and subtitle props
 */
function Welcome({ title, subtitle }) {
  return (
    <div className="welcome-section">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

/**
 * Theme Switcher Component
 * Uses useState to toggle between light and dark mode
 * Applies conditional classes based on theme
 */
function ThemeSwitcher({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="theme-button">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <p>Current Theme: <strong>{theme}</strong></p>
    </div>
  );
}

/**
 * Random Motivational Quote Component
 * Functional component with static JSX
 */
function MotivationalQuote() {
  return (
    <div className="quote-section">
      <blockquote>
        <p>"Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
        <cite>— Winston Churchill</cite>
      </blockquote>
    </div>
  );
}

/**
 * Home Page Component
 * Combines all sub-components and manages theme state
 */
function Home() {
  // State for theme toggle
  const [theme, setTheme] = useState('light');

  return (
    <div className={`home-page ${theme}-theme`}>
      <Welcome 
        title="Welcome to Student Management Dashboard" 
        subtitle="Manage and organize your students efficiently"
      />
      
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      
      <MotivationalQuote />
    </div>
  );
}

export default Home;