import React from "react"

const EducForm = ({ changeEducText }) => {
  return (
    <div>
      <h4>Education</h4>
      <form>
        <label htmlFor="universityName">University Name</label>
        <input
          onBlur={(e) => {
            changeEducText("universityName", e)
          }}
          id="universityName"
          type="text"
        />
        <label htmlFor="degree">Degree</label>
        <input
          onBlur={(e) => {
            changeEducText("degree", e)
          }}
          id="degree"
          type="text"
        />
      </form>
    </div>
  )
}

export default EducForm
