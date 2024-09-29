import React, { useState } from "react";
import Select from "react-select";
import "./ScheduleBuilder.css"; 

const courses = [
  { value: "class1", label: "ARCH" },
  { value: "class2", label: "UD" },
  { value: "class3", label: "URP" },
  { value: "class4", label: "UT" },
  { value: "class5", label: "BIOMATLS" },
  { value: "class6", label: "DENT"},
  { value: "class7", label: "DENTED" },
  { value: "class8", label: "DHYGRACK" },
  { value: "class9", label: "ENDODONT" },
  { value: "class10", label: "ORALBIOL" },
  { value: "class11", label: "ORALDIAG" },
  { value: "class12", label: "ORALHEAL" },
  { value: "class13", label: "ORALPATH" },
  { value: "class14", label: "ORALSURG" },
  { value: "class15", label: "ORTHO" },
  { value: "class16", label: "PEDDENT"},
  { value: "class17", label: "PERIODON" },
  { value: "class18", label: "PROSTHOD" },
  { value: "class19", label: "RESTORA" },
  { value: "class20", label: "AEROSP" },
  { value: "class21", label: "BIOMEDE" },
  { value: "climate", label: "CLIMATE" },
  { value: "class23", label: "SPACE" },
  { value: "class24", label: "CHE" },
  { value: "class25", label: "CEE" },
  { value: "class26", label: "ROB"},
  { value: "class27", label: "DESCI" },
  { value: "class28", label: "ENSCEN" },
  { value: "eecs", label: "EECS" },
  { value: "class30", label: "ENGR" },
  { value: "class31", label: "ENTR" },
  { value: "class32", label: "UARTS" },
  { value: "ioe", label: "IOE" },
  { value: "class34", label: "MATSCIE" },
  { value: "class35", label: "MECHENG" },
  { value: "class36", label: "ENVIRON" },
  { value: "class37", label: "EAS" },
  { value: "si", label: "SI" },
  { value: "class39", label: "MOVESCI"},
  { value: "class40", label: "SM" },
  { value: "class41", label: "RCMUSIC" },
  { value: "class42", label: "RCNSCI" },
  { value: "class43", label: "APPPHYS" },
  { value: "class44", label: "ASTRO" },
  { value: "class45", label: "GREEKMOD" },
  { value: "class46", label: "LATIN" },
  { value: "class47", label: "COMM" },
  { value: "class48", label: "ENGLISH" },
  { value: "econ", label: "ECON"},
  { value: "cogsci", label: "COGSCI" },
  { value: "cmplxsys", label: "CMPLXSYS" },
  { value: "class52", label: "LING" },
  { value: "class53", label: "MACROMOL" },
  { value: "class54", label: "MATH" },
  { value: "class55", label: "MCDB" },
  { value: "class56", label: "MUSIC" },
  { value: "class57", label: "PHIL"},
  { value: "class58", label: "PHYSICS" },
  { value: "class59", label: "POLSCI" },
  { value: "class60", label: "PSYCH" },
];

const courseCodes = [
  { value: "econ", label: "101" },
  { value: "eecs", label: "280" },
  { value: "cogsci", label: "200" },
  { value: "climate", label: "102" },
  { value: "eecs", label: "281" },
  { value: "ioe", label: "373" },
  { value: "si", label: "364" },
  { value: "cmplxsys", label: "251" },
];

const ScheduleBuilder = () => {
  const [classList, setClassList] = useState([{ course: null, code: null }]);
  const [scheduleText, setScheduleText] = useState(""); // State to hold the schedule text

  const addClass = () => {
    setClassList([...classList, { course: null, code: null }]);
  };

  const submitClass = () => {
    const newItems = classList.map((classItem) => {
      const { course, code } = classItem;
      return course && code ? `${course.label} ${code.label}` : null;
    }).filter(item => item !== null); // Filter out any null entries

    if (newItems.length === 0) {
      alert("Please select both a course and a code."); // Alert if a selection is missing
    } else {
      const selectedClasses = newItems.join(", "); // Join the classes for comparison
      if (
        selectedClasses.includes("ECON 102") &&
        selectedClasses.includes("EECS 280") &&
        selectedClasses.includes("COGSCI 200") &&
        selectedClasses.includes("CLIMATE 102")
      ) {
        setScheduleText("hi"); // Set text area to "hi"
      } else {
        setScheduleText(newItems.join("\n")); // Otherwise, set the text area with the class list
      }
    }
  };

  const handleClassChange = (index, selectedOption, type) => {
    const updatedClasses = classList.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          [type]: selectedOption
        };
      }
      return item;
    });
    setClassList(updatedClasses);
  };

  return (
    <div>
      {/* Header Bar */}
      <header className="header-bar">
        <h1 className="header-title">MaizePlanner</h1>
      </header>
      
      {/* Main Content */}
      <div className="schedule-container">
        {/* First Section: Semester */}
        <div className="section-semester">
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
          {classList.map((item, index) => (
            <div key={index} className="dropdown-container">
              <Select
                className="dropdown-select"
                options={courses}
                placeholder="Course name"
                isSearchable
                onChange={(selectedOption) =>
                  handleClassChange(index, selectedOption, "course")
                }
              />
              <Select
                className="dropdown-select"
                options={courseCodes}
                placeholder="Course code"
                isSearchable
                onChange={(selectedOption) =>
                  handleClassChange(index, selectedOption, "code")
                }
              />
            </div>
          ))}
          <button className="add-class-button" onClick={addClass}>
            Add Another Class
          </button>
          <button className="submit-class-button" onClick={submitClass}>
            Submit Class
          </button>
        </div>

        {/* Third Section: Your Schedule */}
        <div className="section">
          <h1>YOUR SCHEDULE</h1>
          <div className="arrow-container">
            <span className="arrow">&#10145;</span> {/* Arrow Icon */}
          </div>
          
          {/* Text Box to display the schedule */}
          <textarea
            className="schedule-textarea"
            value={scheduleText}
            readOnly
            rows={5}
            style={{ 
              width: "100%", 
              padding: "10px", 
              borderRadius: "5px", 
              border: "1px solid #ccc", 
              backgroundColor: "white" 
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleBuilder;