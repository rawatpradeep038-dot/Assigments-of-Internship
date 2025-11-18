// src/pages/Students.jsx
import { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard';

/**
 * Students Page Component
 * Features:
 * - Fetches student data from API using useEffect
 * - Displays loading, error, and empty states
 * - Renders list of student cards with unique keys
 */
function Students() {
  // State management
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetch students data on component mount
   * API: JSONPlaceholder Users
   * Change this URL to your chosen API
   */
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace with your chosen API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }

        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // Empty dependency array - runs once on mount

  // Loading state
  if (loading) {
    return (
      <div className="students-page">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading students...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="students-page">
        <div className="error-state">
          <h2>⚠️ Error</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (students.length === 0) {
    return (
      <div className="students-page">
        <div className="empty-state">
          <h2>No Students Found</h2>
          <p>There are no students to display at the moment.</p>
        </div>
      </div>
    );
  }

  // Success state - render student cards
  return (
    <div className="students-page">
      <h1>All Students</h1>
      <p className="students-count">Total: {students.length} students</p>
      
      <div className="students-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;