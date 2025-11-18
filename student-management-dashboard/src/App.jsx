// src/App.jsx
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
 */
function App() {
  return (
    <div className="app">
      {/* Navbar appears on all pages */}
      <Navbar logoText="Student Dashboard" />
      
      {/* Main content area with routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
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
