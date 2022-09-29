import React, { Component } from "react"

class SkillForm extends Component {
  //   constructor(props) {
  //     super(props)

  //   }

  render() {
    const { skills, deleteSkill, changeSkillText } = this.props
    return (
      <div>
        <h4>Skills</h4>
        {skills.map((skill) => {
          return (
            <div key={skill.id}>
              <form>
                <label htmlFor={"skillName" + skill.id}>Skill</label>
                <input
                  id={"skillName" + skill.id}
                  type="text"
                  onChange={(e) => {
                    changeSkillText(skill.id, "name", e)
                  }}
                />

                <label htmlFor={"skillDescription" + skill.id}>
                  Skill Description
                </label>
                <textarea
                  id={"skillDescription" + skill.id}
                  type="text"
                  onChange={(e) => {
                    changeSkillText(skill.id, "description", e)
                  }}
                ></textarea>
              </form>
              <button
                onClick={() => {
                  deleteSkill(skill.id)
                }}
                className="delete-skill-form"
              >
                Delete this skill
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SkillForm
