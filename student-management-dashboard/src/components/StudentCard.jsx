// src/components/StudentCard.jsx
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

/**
 * StudentCard Component
 * Displays individual student information
 * Handles navigation and favorite actions
 */
function StudentCard({ student }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Check if student is already in favorites
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some(fav => fav.id === student.id);

  // Navigate to student details page
  const handleViewProfile = () => {
    navigate(`/students/${student.id}`);
  };

  // Toggle favorite status
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(student.id));
    } else {
      dispatch(addFavorite(student));
    }
  };

  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p className="student-email">✉️ {student.email}</p>
        <p className="student-location">
          📍 {student.address?.city || student.company?.name || 'N/A'}
        </p>
      </div>
      
      <div className="student-actions">
        <button 
          onClick={handleViewProfile} 
          className="btn btn-primary"
        >
          View Profile
        </button>
        <button 
          onClick={handleToggleFavorite} 
          className={`btn ${isFavorite ? 'btn-danger' : 'btn-secondary'}`}
        >
          {isFavorite ? '❤️ Remove' : '🤍 Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default StudentCard;