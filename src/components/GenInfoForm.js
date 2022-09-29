import React, { Component } from "react"

class GenInfoForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { changeInfoText } = this.props

    return (
      <div>
        <h4>General Information</h4>
        <form>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            onChange={(e) => {
              changeInfoText("fullName", e)
            }}
          />
          <label htmlFor="role">Current Role</label>
          <input
            id="role"
            type="text"
            onChange={(e) => {
              changeInfoText("role", e)
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => {
              changeInfoText("email", e)
            }}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            onChange={(e) => {
              changeInfoText("phoneNumber", e)
            }}
          />
        </form>
      </div>
    )
  }
}

export default GenInfoForm
