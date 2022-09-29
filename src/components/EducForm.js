import React, { Component } from "react"

class EducForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { info } = this.props

    return (
      <form>
        <label htmlFor="universityName">University Name</label>
        <input id="universityName" type="text" />
        <label htmlFor="degree">Degree</label>
        <input id="degree" type="text" />
      </form>
    )
  }
}

export default EducForm
