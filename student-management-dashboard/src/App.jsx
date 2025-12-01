// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import Favorites from './pages/Favorites';
import About from './pages/About';
import './App.css';

/**
 * Main App Component
 * Sets up routing and persistent Navbar
 * Manages global dark mode state
 */
function App() {
  // Global dark mode state - lifted to App level
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navbar appears on all pages */}
      <Navbar 
        logoText="Student Dashboard" 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      {/* Main content area with routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;