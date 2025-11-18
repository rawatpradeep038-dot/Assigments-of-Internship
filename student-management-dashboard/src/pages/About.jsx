// src/pages/About.jsx

/**
 * About Page Component
 * Simple functional component with static JSX
 * Describes the project and its features
 */
function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>📚 About Student Management Dashboard</h1>
        
        <section className="about-section">
          <h2>Project Overview</h2>
          <p>
            This is a comprehensive Student Management Dashboard built with React. 
            It demonstrates modern web development practices including state management, 
            routing, API integration, and responsive design.
          </p>
        </section>

        <section className="about-section">
          <h2>✨ Key Features</h2>
          <ul>
            <li><strong>Dynamic Routing:</strong> Navigate between different pages seamlessly</li>
            <li><strong>API Integration:</strong> Fetch and display student data from external APIs</li>
            <li><strong>State Management:</strong> Redux Toolkit for managing favorites</li>
            <li><strong>Dark Mode:</strong> Toggle between light and dark themes</li>
            <li><strong>Responsive Design:</strong> Works on desktop, tablet, and mobile devices</li>
            <li><strong>Favorites System:</strong> Add and manage your favorite students</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🛠️ Technologies Used</h2>
          <ul>
            <li>React 18</li>
            <li>React Router DOM</li>
            <li>Redux Toolkit</li>
            <li>REST API Integration</li>
            <li>Modern CSS</li>
            <li>Vite Build Tool</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>📖 Concepts Covered</h2>
          <ul>
            <li>Components & JSX</li>
            <li>Props & State Management</li>
            <li>React Hooks (useState, useEffect)</li>
            <li>Conditional Rendering</li>
            <li>Lists & Keys</li>
            <li>Event Handling</li>
            <li>API Fetching</li>
            <li>Dynamic Routing</li>
            <li>Redux State Management</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>👨‍💻 Developer</h2>
          <p>
            Created as part of the internship project at Cepia Labs.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;