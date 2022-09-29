import React, { Component } from "react"

class SkillsSection extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { skills } = this.props

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
}

export default SkillsSection
