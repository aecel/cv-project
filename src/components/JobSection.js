import React, { Component } from "react"

class JobSection extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { jobs } = this.props

    return (
      <div>
        <h4>Hello, I am Job Section</h4>
        {jobs.map((job) => {
          return (
            <div key={job.id}>
              <div>Company Name: {job.company}</div>
              <div>Role: {job.role}</div>
              <div>Description: {job.description}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default JobSection
