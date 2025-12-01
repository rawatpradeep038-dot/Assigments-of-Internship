// src/pages/Home.jsx

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
 * Uses props from App level state
 * Applies conditional classes based on theme
 */
function ThemeSwitcher({ darkMode, setDarkMode }) {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="theme-button">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <p>Current Theme: <strong>{darkMode ? 'Dark' : 'Light'}</strong></p>
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
 * Receives dark mode state from App level
 */
function Home({ darkMode, setDarkMode }) {
  return (
    <div className="home-page">
      <Welcome 
        title="Welcome to Student Management Dashboard" 
        subtitle="Manage and organize your students efficiently"
      />
      
      <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <MotivationalQuote />
    </div>
  );
}

export default Home;