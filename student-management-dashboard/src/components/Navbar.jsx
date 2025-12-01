// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Navbar Component
 * Features:
 * - Accepts logoText prop
 * - Highlights active route
 * - Displays favorites count from Redux
 * - Dark mode toggle button
 */
function Navbar({ logoText, darkMode, setDarkMode }) {
  const location = useLocation(); // Get current route
  const favoritesCount = useSelector((state) => state.favorites.favorites.length);

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo section */}
        <div className="navbar-logo">
          <h2>{logoText}</h2>
        </div>

        {/* Navigation links */}
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/students" className={isActive('/students')}>
              Students
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={isActive('/favorites')}>
              Favorites
              {/* Show favorites count badge */}
              {favoritesCount > 0 && (
                <span className="favorites-badge">{favoritesCount}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')}>
              About
            </Link>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;