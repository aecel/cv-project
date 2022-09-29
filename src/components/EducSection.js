import React, { Component } from "react"

class EducSection extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { education } = this.props

    return (
      <div>
        <h4>Hello, I am Education Section</h4>
        <div>University Name: {education.universityName}</div>
        <div>Degree: {education.degree}</div>
      </div>
    )
  }
}

export default EducSection
