import React, { useState } from 'react';
import './App.css'; // You will create this file for styles

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>NISSI</h1>
      </header>
      <div className="content">
        <p className="animated-text">Press the button below to know about us</p>
        <button className="nissi-button" onClick={handleOpenDialog}>
          Show About NISSI
        </button>
      </div>

      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>About NISSI</h2>
            <p>NISSI is managed by professionals specialized in Electrical, Electronics, and Instrumentation Engineering.</p>
            <p>Since 2005, NISSI offers high-quality solutions with a high degree of reliability and aesthetic looks.</p>
            <p>We provide services and solutions for power transmission, distribution, and integrated automation to improve productivity, enhance comfort, and ensure safety and security.</p>
            <button className="close-button" onClick={handleCloseDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
