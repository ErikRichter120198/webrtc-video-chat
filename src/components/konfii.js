import React from 'react';
import './App.css';
import VideoChat from './VideoChat';


document.addEventListener('DOMContentLoaded', (event) => {
  const exitButton = document.getElementById('exitButton');
  const startVideoButton = document.getElementById('startVideo');
  const stopVideoButton = document.getElementById('stopVideo');
  const muteAudioButton = document.getElementById('muteAudio');
  const sendMessageButton = document.getElementById('sendMessage');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  exitButton.addEventListener('click', () => {
      // Handhabung des Beendens der Konferenz
      alert('Konferenz wird beendet...');
  });

  startVideoButton.addEventListener('click', () => {
      // Handhabung des Startens des Videos
      alert('Video wird gestartet...');
  });

  stopVideoButton.addEventListener('click', () => {
      // Handhabung des Stoppens des Videos
      alert('Video wird gestoppt...');
  });

  muteAudioButton.addEventListener('click', () => {
      // Handhabung des Stummschaltens des Audios
      alert('Audio wird stummgeschaltet...');
  });

  sendMessageButton.addEventListener('click', () => {
      const message = chatInput.value;
      if (message.trim()) {
          const messageElement = document.createElement('div');
          messageElement.textContent = message;
          chatMessages.appendChild(messageElement);
          chatInput.value = '';
      }
  });

  chatInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          sendMessageButton.click();
      }
  });
});

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