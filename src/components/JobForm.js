import React from "react"

const JobForm = ({ jobs, deleteJob, changeJobText, addJob }) => {
  return (
    <div>
      <h4>Job Experience</h4>
      {jobs.map((job) => {
        return (
          <div key={job.id}>
            <form>
              <label htmlFor={"companyName" + job.id}>Company Name</label>
              <input
                id={"companyName" + job.id}
                type="text"
                onChange={(e) => {
                  changeJobText(job.id, "company", e)
                }}
              />
              <label htmlFor={"companyRole" + job.id}>Company Role</label>
              <input
                id={"companyRole" + job.id}
                type="text"
                onChange={(e) => {
                  changeJobText(job.id, "role", e)
                }}
              />
              <label htmlFor={"companyRoleDescription" + job.id}>
                Company Role Description
              </label>
              <textarea
                id={"companyRoleDescription" + job.id}
                type="text"
                onChange={(e) => {
                  changeJobText(job.id, "description", e)
                }}
              ></textarea>
            </form>
            <button
              onClick={() => {
                deleteJob(job.id)
              }}
              className="delete-job-form"
            >
              Delete this job
            </button>
          </div>
        )
      })}
      <button onClick={addJob}>Add another job</button>
    </div>
  )
}

export default JobForm
