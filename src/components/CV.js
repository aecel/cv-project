import React from "react"
import EducSection from "./EducSection"
import JobSection from "./JobSection"
import GenInfoSection from "./GenInfoSection"
import SkillsSection from "./SkillsSection"

const CV = ({ info, jobs, education, skills }) => {
  return (
    <div>
      <h4>Hello, I am CV</h4>
      <GenInfoSection info={info} />
      <JobSection jobs={jobs} />
      <SkillsSection skills={skills} />
      <EducSection education={education} />
    </div>
  )
}

export default CV
