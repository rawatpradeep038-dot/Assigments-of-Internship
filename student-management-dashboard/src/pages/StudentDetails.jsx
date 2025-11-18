// src/pages/StudentDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

/**
 * Student Details Page Component
 * Features:
 * - Fetches single student data using dynamic ID from URL
 * - Displays complete student information
 * - Add/Remove from favorites functionality
 * - Back navigation
 */
function StudentDetails() {
  const { id } = useParams(); // Get student ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State management
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if student is in favorites
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some(fav => fav.id === parseInt(id));

  /**
   * Fetch individual student data
   */
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace with your API endpoint
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error('Student not found');
        }

        const data = await response.json();
        setStudent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]); // Re-fetch if ID changes

  // Toggle favorite status
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(student.id));
    } else {
      dispatch(addFavorite(student));
    }
  };

  // Navigate back to students list
  const handleBack = () => {
    navigate('/students');
  };

  // Loading state
  if (loading) {
    return (
      <div className="student-details-page">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading student details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !student) {
    return (
      <div className="student-details-page">
        <div className="error-state">
          <h2>⚠️ Student Not Found</h2>
          <p>{error || 'The student you are looking for does not exist.'}</p>
          <button onClick={handleBack} className="btn btn-primary">
            Back to Students
          </button>
        </div>
      </div>
    );
  }

  // Success state - display student details
  return (
    <div className="student-details-page">
      <div className="details-container">
        <div className="details-header">
          <h1>{student.name}</h1>
          <p className="username">@{student.username}</p>
        </div>

        <div className="details-content">
          {/* Contact Information */}
          <div className="details-section">
            <h3>📧 Contact Information</h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Website:</strong> {student.website}</p>
          </div>

          {/* Address */}
          <div className="details-section">
            <h3>📍 Address</h3>
            <p>{student.address?.street}</p>
            <p>{student.address?.suite}</p>
            <p>{student.address?.city}, {student.address?.zipcode}</p>
          </div>

          {/* Company */}
          <div className="details-section">
            <h3>🏢 Company</h3>
            <p><strong>Name:</strong> {student.company?.name}</p>
            <p><strong>Role:</strong> {student.company?.bs}</p>
            <p><strong>Catchphrase:</strong> {student.company?.catchPhrase}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="details-actions">
          <button onClick={handleBack} className="btn btn-secondary">
            ← Back to Students
          </button>
          <button 
            onClick={handleToggleFavorite} 
            className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
          >
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;