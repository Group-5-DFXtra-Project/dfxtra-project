import React from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar';
import './App.css';
import userData from './sampleProfileInfo.json'

function App() {

  const profileName = userData.profileInfo.profileHeader

  return (
    <div className="App">
      <Header displayName={profileName.displayName} />
      <Navbar />

    </div>
  );
}

export default App;
