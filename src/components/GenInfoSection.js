import React, { Component } from "react"

class GenInfoSection extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { info } = this.props

    return (
      <div>
        <h4>Hello, I am a GenInfoSection</h4>
        <div>fullname {info.fullName}</div>
        <div>role {info.role}</div>
        <div>email {info.email}</div>
        <div>phoneNumber {info.phoneNumber}</div>
      </div>
    )
  }
}

export default GenInfoSection
