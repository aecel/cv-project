import React from "react"

const SkillsSection = ({ skills }) => {
  return (
    <div>
      <h4>Hello, I am Skills Section</h4>
      {skills.map((skill) => {
        return (
          <div key={skill.id}>
            <div>Skill: {skill.name}</div>
            <div>Description: {skill.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default SkillsSection
