import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WebRTC Video Chat</h1>
      </header>
      <div className="video-container">
        <VideoChat />
      </div>
    </div>
  );
}

export default App;
