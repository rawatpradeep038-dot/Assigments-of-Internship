import React, { useState } from 'react';

function ToggleButton() {
  // useState Hook - stores current state (true/false)
  const [isOn, setIsOn] = useState(false);

  // Toggle function - switches between ON/OFF
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React State Toggle Example</h1>
      
      {/* Display current state */}
      <div style={isOn ? styles.statusOn : styles.statusOff}>
        {isOn ? 'ON' : 'OFF'}
      </div>

      {/* Toggle button */}
      <button 
        style={styles.button} 
        onClick={handleToggle}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        Toggle
      </button>

      {/* Additional info */}
      <p style={styles.info}>
        Current State: <strong>{isOn ? 'ON' : 'OFF'}</strong>
      </p>
    </div>
  );
}

// Inline styles with subtle colors
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
    color: '#334155',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '30px',
    fontSize: '2rem',
    color: '#475569',
  },
  statusOn: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '20px 0',
    padding: '30px 60px',
    borderRadius: '15px',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)',
    transition: 'all 0.3s ease',
  },
  statusOff: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '20px 0',
    padding: '30px 60px',
    borderRadius: '15px',
    backgroundColor: '#e2e8f0',
    color: '#475569',
    boxShadow: '0 4px 12px rgba(100, 116, 139, 0.15)',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#64748b',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '20px',
  },
  info: {
    marginTop: '30px',
    fontSize: '1.1rem',
    padding: '15px 30px',
    backgroundColor: '#ffffff',
    color: '#64748b',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
};

export default ToggleButton;