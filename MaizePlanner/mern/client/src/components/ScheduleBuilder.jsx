import React from "react";
import Select from "react-select";
import "./ScheduleBuilder.css"; 

const courses = [
  { value: "class1", label: "Class 1" },
  { value: "class2", label: "Class 2" },
  { value: "class3", label: "Class 3" },
  { value: "class4", label: "Class 4" },
  { value: "class5", label: "Class 5" },
  { value: "class6", label: "Class 6" },
  { value: "class7", label: "Class 7" },
  { value: "class8", label: "Class 8" },
  { value: "class9", label: "Class 9" },
  { value: "class10", label: "Class 10" },
];

const courseCodes = [
  { value: "code1", label: "Code 1" },
  { value: "code2", label: "Code 2" },
  { value: "code3", label: "Code 3" },
  { value: "code4", label: "Code 4" },
  { value: "code5", label: "Code 5" },
  { value: "code6", label: "Code 6" },
  { value: "code7", label: "Code 7" },
  { value: "code8", label: "Code 8" },
  { value: "code9", label: "Code 9" },
  { value: "code10", label: "Code 10" }
];

const ScheduleBuilder = () => {
  return (
    <div className="schedule-container">
      {/* First Section: Semester */}
      <div className="section">
        <h1>SEMESTER</h1>
        <Select
          className="dropdown-select"
          options={[
            { value: "Spring 2024", label: "Spring 2024" },
            { value: "Summer 2024", label: "Summer 2024" },
            { value: "Fall 2024", label: "Fall 2024" }
          ]}
          placeholder="Choose a semester"
        />
      </div>

      {/* Second Section: Classes */}
      <div className="section">
        <h1>CLASSES</h1>
        <div className="dropdown-container">
          <Select
            className="dropdown-select"
            options={courses}
            placeholder="Course name"
            isSearchable
          />
          <Select
            className="dropdown-select"
            options={courseCodes} 
            placeholder="Course code"
            isSearchable
          />
        </div>
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
