import React, { useEffect, useState } from "react"
import CV from "./components/CV"
import EducForm from "./components/EducForm"
import JobForm from "./components/JobForm"
import GenInfoForm from "./components/GenInfoForm"
import SkillForm from "./components/SkillForm"
import style from "./styles/style.css"
import jsPDF from "jspdf"
import Lato from "./styles/Lato-Regular-normal.js"
import Latobold from "./styles/Lato-Bold-bold.js"

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
    const myPdf = new jsPDF()
    myPdf.getFontList()
    // myPdf.setFont("Lato-Regular", "normal")
    // Filled dark gray rectangle
    myPdf.setDrawColor(0)
    myPdf.setFillColor(29, 29, 29)
    myPdf.rect(0, 0, 211, 30, "F")

    // Filled light gray rectangle
    myPdf.setDrawColor(0)
    myPdf.setFillColor(197, 197, 197)
    myPdf.rect(0, 30, 211, 267, "F")

    myPdf.setFillColor("#1d1d1d")
    myPdf.setFont("Lato-Bold", "bold")
    myPdf.setTextColor("#c5c5c5")
    const text = JSON.stringify(education)
    const splitText = myPdf.splitTextToSize(text, 180)
    myPdf.text(splitText, 10, 10)

    var d = myPdf.getTextDimensions(splitText)
    console.log(d)
    // myPdf.text("I am a baby deer -acey", 10, 24)

    setPdf(myPdf.output("datauristring", "mycv.pdf"))
    // myPdf.save("cv.pdf")
  }, [education])

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
    <div className="App">
      <div className="paper">
        <h4>Hello, I am a form</h4>
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
        {pdf !== "" ? (
          <embed width="100%" height="100%" src={pdf}></embed>
        ) : null}
        {/* <CV info={info} jobs={jobs} education={education} skills={skills} /> */}
      </div>
    </div>
  )
}

export default App
