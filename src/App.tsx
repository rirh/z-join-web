import React from 'react';
import './App.css'
const url = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-crypto2server/7c09c100-f1da-11ea-8a36-ebb87efcf8c0.mp4'

function App() {
  return (
    <div className="container">
      <video  className="bg-container" playsInline autoPlay muted loop src={url}></video>
      <h1 className="title">Everything is begning!</h1>
    </div>
  );
}

export default App;
