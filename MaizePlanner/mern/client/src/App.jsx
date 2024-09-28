import { Outlet } from "react-router-dom";
import ScheduleBuilder from './components/ScheduleBuilder';
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Add the fade-out effect after 1 second
    const timeout = setTimeout(() => {
      const welcomeScreen = document.querySelector('.welcome-screen');
      welcomeScreen.classList.add('hide');
    }, 1000); // 1 second delay

    // Remove the welcome screen after the transition ends
    const fadeOutTimeout = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // 2 seconds for fading

    return () => {
      clearTimeout(timeout);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  return (
    <div className="app">
      {showWelcome ? (
        <div className="welcome-screen">
          <h1>Welcome to MaizePlanner</h1>
        </div>
      ) : (
        <div className="yellow-screen">
          {/* You can add text or any content here */}
          <ScheduleBuilder />
        </div>
      )}
    </div>
  );
};

export default App;