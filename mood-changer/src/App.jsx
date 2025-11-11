import React from 'react';
import MoodChanger from './components/MoodChanger';

function App() {
  return (
    <div className="App">
      {/* Pass your name as a prop */}
      <MoodChanger name="Cepialabs ! " />
    </div>
  );
}

export default App;
