import React from 'react';

function MemberCard({ name, role, feedbackCount, onIncrease }) {
  return (
    <div style={styles.card}>
      {/* Member Avatar */}
      <div style={styles.avatar}>
        {name.charAt(0).toUpperCase()}
      </div>

      {/* Member Info */}
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.role}>{role}</p>

      {/* Feedback Count Display */}
      <div style={styles.feedbackDisplay}>
        <span style={styles.feedbackLabel}>Feedback Count:</span>
        <span style={styles.feedbackCount}>{feedbackCount}</span>
      </div>

      {/* Increase Button */}
      <button 
        style={styles.button} 
        onClick={onIncrease}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
      >
        + Add Feedback
      </button>
    </div>
  );
}

// Subtle styling for card
const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    minWidth: '250px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  name: {
    fontSize: '1.5rem',
    color: '#334155',
    margin: '0',
    fontWeight: '600',
  },
  role: {
    fontSize: '1rem',
    color: '#64748b',
    margin: '0',
  },
  feedbackDisplay: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '15px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    width: '100%',
  },
  feedbackLabel: {
    fontSize: '0.9rem',
    color: '#64748b',
  },
  feedbackCount: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#10b981',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#10b981',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
  },
};

export default MemberCard;