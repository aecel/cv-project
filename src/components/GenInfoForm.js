import React from "react"

const GenInfoForm = ({ changeInfoText }) => {
  return (
    <div>
      <h4>General Information</h4>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          onBlur={(e) => {
            changeInfoText("fullName", e)
          }}
        />
        <label htmlFor="role">Current Role</label>
        <input
          id="role"
          type="text"
          onBlur={(e) => {
            changeInfoText("role", e)
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          onBlur={(e) => {
            changeInfoText("email", e)
          }}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="text"
          onBlur={(e) => {
            changeInfoText("phoneNumber", e)
          }}
        />
      </form>
    </div>
  )
}

export default GenInfoForm
