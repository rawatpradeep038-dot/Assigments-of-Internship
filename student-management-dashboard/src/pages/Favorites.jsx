// src/pages/Favorites.jsx
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFavorite, clearFavorites } from '../redux/favoritesSlice';

/**
 * Favorites Page Component
 * Features:
 * - Displays all favorite students from Redux store
 * - Remove individual favorites
 * - Clear all favorites
 * - Shows empty state when no favorites
 */
function Favorites() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get favorites from Redux store
  const favorites = useSelector((state) => state.favorites.favorites);

  // Remove single favorite
  const handleRemove = (studentId) => {
    dispatch(removeFavorite(studentId));
  };

  // Clear all favorites with confirmation
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all favorites?')) {
      dispatch(clearFavorites());
    }
  };

  // View student details
  const handleViewProfile = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  // Empty state - no favorites
  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="empty-state">
          <h2>💔 No Favorite Students</h2>
          <p>You haven't added any students to your favorites yet.</p>
          <button 
            onClick={() => navigate('/students')} 
            className="btn btn-primary"
          >
            Browse Students
          </button>
        </div>
      </div>
    );
  }

  // Display favorites list
  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>❤️ Favorite Students</h1>
        <p className="favorites-count">
          {favorites.length} {favorites.length === 1 ? 'student' : 'students'}
        </p>
        <button 
          onClick={handleClearAll} 
          className="btn btn-danger"
        >
          Clear All Favorites
        </button>
      </div>

      <div className="favorites-grid">
        {favorites.map((student) => (
          <div key={student.id} className="favorite-card">
            <div className="favorite-info">
              <h3>{student.name}</h3>
              <p className="student-email">✉️ {student.email}</p>
              <p className="student-location">
                📍 {student.address?.city || student.company?.name || 'N/A'}
              </p>
            </div>

            <div className="favorite-actions">
              <button 
                onClick={() => handleViewProfile(student.id)} 
                className="btn btn-primary"
              >
                View Profile
              </button>
              <button 
                onClick={() => handleRemove(student.id)} 
                className="btn btn-danger"
              >
                ❌ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;