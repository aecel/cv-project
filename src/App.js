import React, { useEffect, useState } from "react"
// import CV from "./components/CV"
import EducForm from "./components/EducForm"
import JobForm from "./components/JobForm"
import GenInfoForm from "./components/GenInfoForm"
import SkillForm from "./components/SkillForm"
import "./styles/style.css"
import previewPdf from "./previewPdf"

const uuid = () => {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  )
}

const App = () => {
  const [pdf, setPdf] = useState("")

  const [info, setInfo] = useState({
    fullName: "",
    role: "",
    email: "",
    phoneNumber: "",
  })

  const [jobs, setJobs] = useState([
    {
      company: "",
      role: "",
      description: "",
      id: uuid(),
    },
  ])

  const [education, setEducation] = useState({
    universityName: "",
    degree: "",
  })

  const [skills, setSkills] = useState([
    {
      name: "",
      description: "",
      id: uuid(),
    },
  ])

  useEffect(() => {
    const myPdf = previewPdf([info, jobs, skills, education])

    setPdf(myPdf.output("datauristring", "mycv.pdf"))
    // myPdf.save("cv.pdf")
  }, [info, jobs, skills, education])

  const savePdf = () => {
    const myPdf = previewPdf([info, jobs, skills, education])
    myPdf.save("cv.pdf")
  }

  const changeInfoText = (infoParameter, e) => {
    const nextInfo = { ...info }

    nextInfo[infoParameter] = e.target.value

    setInfo(nextInfo)
  }

  const changeJobText = (jobid, jobParameter, e) => {
    setJobs(
      jobs.map((job) => {
        if (jobid === job.id) {
          job[jobParameter] = e.target.value
        }
        return job
      })
    )
  }

  const changeEducText = (educParameter, e) => {
    const nextEduc = { ...education }

    nextEduc[educParameter] = e.target.value

    setEducation(nextEduc)
  }

  const changeSkillText = (skillid, skillParameter, e) => {
    setSkills(
      skills.map((skill) => {
        if (skillid === skill.id) {
          skill[skillParameter] = e.target.value
        }
        return skill
      })
    )
  }

  const addJob = () => {
    const nextJobs = [...jobs]

    nextJobs.push({
      company: "",
      role: "",
      description: "",
      id: uuid(),
    })

    setJobs(nextJobs)
  }

  const addSkill = () => {
    const nextSkills = [...skills]

    nextSkills.push({
      name: "",
      description: "",
      id: uuid(),
    })

    setSkills(nextSkills)
  }

  const deleteJob = (num) => {
    setJobs(
      jobs.filter((job) => {
        return job.id !== num
      })
    )
  }

  const deleteSkill = (num) => {
    setSkills(
      skills.filter((skill) => {
        return skill.id !== num
      })
    )
  }

  return (
    <div>
      <header>CV Generator</header>
      <div className="App">
        <div className="paper">
          <h4 className="no-margin-bottom">Fill out this form</h4>
          <h6 className="normal-text">See a preview of your CV to the right</h6>
          <GenInfoForm changeInfoText={changeInfoText} />
          <JobForm
            jobs={jobs}
            deleteJob={deleteJob}
            changeJobText={changeJobText}
            addJob={addJob}
          />
          <SkillForm
            skills={skills}
            deleteSkill={deleteSkill}
            changeSkillText={changeSkillText}
            addSkill={addSkill}
          />
          <EducForm changeEducText={changeEducText} />
        </div>
        <div className="paper" id="cv">
          <div className="flexdiv">
            <h4>Preview of your CV</h4>
            <button onClick={savePdf}>Save PDF</button>
          </div>
          {pdf !== "" ? (
            <embed width="100%" height="85%" src={pdf}></embed>
          ) : null}
          {/* <CV info={info} jobs={jobs} education={education} skills={skills} /> */}
        </div>
      </div>
      <footer>Copyright © aecel 2022</footer>
    </div>
  )
}

export default App
