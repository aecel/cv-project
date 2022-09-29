import React, { Component } from "react"

class ExpForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { num } = this.props

    return (
      <form>
        <label htmlFor={"companyName"+num}>Company Name</label>
        <input id={"companyName"+num} type="text" />
        <label htmlFor={"companyRole"+num}>Company Role</label>
        <input id={"companyRole"+num} type="text" />
        <label htmlFor={"companyRoleDescription"+num}>Company Role Description</label>
        <textarea id={"companyRoleDescription"+num} type="text"></textarea>
      </form>
    )
  }
}

export default ExpForm
