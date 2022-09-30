import React from "react"

const GenInfoSection = ({ info }) => {
  return (
    <div>
      <h4>Hello, I am General Info Section</h4>
      <div>Full Name: {info.fullName}</div>
      <div>Role: {info.role}</div>
      <div>Email: {info.email}</div>
      <div>Phone Number: {info.phoneNumber}</div>
    </div>
  )
}

export default GenInfoSection
