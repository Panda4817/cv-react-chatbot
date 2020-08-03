import React from "react";

import "./CvOptions.css";

const CvOptions = (props) => {
  const options = [
    { text: "Education", handler: props.actionProvider.handleEducationList, id: 1 },
    { text: "Employment", handler: props.actionProvider.handleEmploymentList, id: 2 },
    { text: "Technical Skills", handler: props.actionProvider.handleTechnicalSkills, id: 3 },
    { text: "Courses", handler: props.actionProvider.handleCoursesList, id: 4 },
    { text: "Links", handler: props.actionProvider.handleLinksList, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="cv-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="cv-options-container">{optionsMarkup}</div>;
};

export default CvOptions;