import React from "react"

const EducSection = ({ education }) => {
  return (
    <div>
      <h4>Hello, I am Education Section</h4>
      <div>University Name: {education.universityName}</div>
      <div>Degree: {education.degree}</div>
    </div>
  )
}

export default EducSection
