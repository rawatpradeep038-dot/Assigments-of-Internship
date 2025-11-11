import React, { useState } from 'react';
import MemberCard from './components/MemberCard';

function App() {
  // State lifting: Managing all feedback counts in parent component
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Pradeep Singh Rawat', role: 'Frontend Developer', feedbackCount: 0 },
    { id: 2, name: 'Deepanshi', role: 'Backend Developer', feedbackCount: 0 },
    { id: 3, name: 'Sourav', role: 'UI/UX Designer', feedbackCount: 0 },
    { id: 4, name: 'Rachit Singh', role: 'Project Manager', feedbackCount: 0 },
  ]);

  // Function to increase feedback for a specific member
  const handleIncreaseFeedback = (id) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id 
        ? { ...member, feedbackCount: member.feedbackCount + 1 }
        : member
    ));
  };

  // Function to reset all feedback counts to zero
  const handleResetAll = () => {
    setTeamMembers(teamMembers.map(member => 
      ({ ...member, feedbackCount: 0 })
    ));
  };

  // Calculate total feedback
  const totalFeedback = teamMembers.reduce((sum, member) => sum + member.feedbackCount, 0);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>Team Feedback Board</h1>
        <p style={styles.subtitle}>Track team feedback and performance</p>
        
        {/* Stats */}
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Total Team Members</span>
            <span style={styles.statValue}>{teamMembers.length}</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Total Feedback</span>
            <span style={styles.statValue}>{totalFeedback}</span>
          </div>
        </div>

        {/* Reset All Button */}
        <button 
          style={styles.resetButton} 
          onClick={handleResetAll}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
        >
          🔄 Reset All Feedback
        </button>
      </div>

      {/* Team Members Grid */}
      <div style={styles.grid}>
        {teamMembers.map(member => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            feedbackCount={member.feedbackCount}
            onIncrease={() => handleIncreaseFeedback(member.id)}
          />
        ))}
      </div>
    </div>
  );
}

// Subtle styling
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '3rem',
    color: '#334155',
    margin: '0 0 10px 0',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#64748b',
    margin: '0 0 30px 0',
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  statBox: {
    backgroundColor: '#ffffff',
    padding: '20px 40px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#64748b',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#10b981',
  },
  resetButton: {
    padding: '15px 40px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#ef4444',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
};

export default App;