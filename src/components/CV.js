import React, { Component } from "react"
import EducSection from "./EducSection"
import ExpSection from "./ExpSection"
import GenInfoSection from "./GenInfoSection"
import SkillsSection from "./SkillsSection"

class CV extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { info } = this.props

    return (
      <div>
        <h4>Hello, I am CV</h4>
        <GenInfoSection info={info} />
        <ExpSection info={info} />
        <SkillsSection info={info} />
        <EducSection info={info} />
      </div>
    )
  }
}

export default CV
