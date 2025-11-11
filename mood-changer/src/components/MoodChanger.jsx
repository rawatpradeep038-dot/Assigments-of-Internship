import React, { useState } from 'react';

function MoodChanger({ name }) {
  // State to store mood (true = Happy, false = Sad)
  const [isHappy, setIsHappy] = useState(true);

  // Toggle mood function
  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Display name from props */}
        <h1 style={styles.name}>Hello, {name}! 👋</h1>
        
        {/* Display current mood */}
        <div style={isHappy ? styles.moodHappy : styles.moodSad}>
          {isHappy ? 'Happy 😃' : 'Sad 😞'}
        </div>

        {/* Button to change mood */}
        <button 
          style={styles.button} 
          onClick={toggleMood}
        >
          Change Mood
        </button>

        {/* Additional info */}
        <p style={styles.info}>
          Current Mood: <strong>{isHappy ? 'Happy' : 'Sad'}</strong>
        </p>
      </div>
    </div>
  );
}

// Subtle color styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    background: '#ffffff',
    padding: '50px 60px',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
  },
  name: {
    fontSize: '2rem',
    color: '#334155',
    marginBottom: '30px',
    fontWeight: '600',
  },
  moodHappy: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#059669',
    background: '#d1fae5',
    padding: '30px',
    borderRadius: '15px',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
  },
  moodSad: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#dc2626',
    background: '#fee2e2',
    padding: '30px',
    borderRadius: '15px',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#64748b',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  info: {
    marginTop: '25px',
    fontSize: '1.1rem',
    color: '#64748b',
    padding: '12px 20px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
  },
};

export default MoodChanger;