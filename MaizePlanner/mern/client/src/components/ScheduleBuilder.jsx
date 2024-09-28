import React from "react";
import "./ScheduleBuilder.css"; 

const ScheduleBuilder = () => {
  return (
    <div className="schedule-container">
      {/* First Section: Semester */}
      <div className="section">
        <h1>SEMESTER</h1>
        <select className="dropdown">
          <option value="">Choose a semester</option>
          <option value="Spring 2024">Spring 2024</option>
          <option value="Summer 2024">Summer 2024</option>
          <option value="Fall 2024">Fall 2024</option>
        </select>
      </div>

      {/* Second Section: Classes */}
      <div className="section">
        <h1>CLASSES</h1>
        <select className="dropdown">
          <option value="">Select a class</option>
          {/* These options will later be populated from the database */}
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          <option value="class3">Class 3</option>
        </select>
      </div>

      {/* Third Section: Your Schedule */}
      <div className="section">
        <h1>YOUR SCHEDULE</h1>
        <div className="arrow-container">
          <span className="arrow">&#10145;</span> {/* Arrow Icon */}
        </div>
      </div>
    </div>
  );
};

export default ScheduleBuilder;
