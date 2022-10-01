import React from "react"

const SkillForm = ({ skills, deleteSkill, changeSkillText, addSkill }) => {
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
                onBlur={(e) => {
                  changeSkillText(skill.id, "name", e)
                }}
              />

              <label htmlFor={"skillDescription" + skill.id}>
                Skill Description
              </label>
              <textarea
                id={"skillDescription" + skill.id}
                type="text"
                onBlur={(e) => {
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
      <button onClick={addSkill}>Add another skill</button>
    </div>
  )
}

export default SkillForm
