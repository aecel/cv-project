import React, { Component } from "react"
import CV from "./components/CV"
import EducForm from "./components/EducForm"
import JobForm from "./components/JobForm"
import GenInfoForm from "./components/GenInfoForm"
import SkillForm from "./components/SkillForm"
import style from "./styles/style.css"

const uuid = () => {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: {
        fullName: "",
        role: "",
        email: "",
        phoneNumber: "",
      },
      jobs: [
        {
          company: "",
          role: "",
          description: "",
          id: uuid(),
        },
      ],
      education: {
        universityName: "",
        degree: "",
      },
      skills: [
        {
          name: "",
          description: "",
          id: uuid(),
        },
      ],
    }
  }

  changeInfoText = (infoParameter, e) => {
    const nextInfo = { ...this.state.info }

    nextInfo[infoParameter] = e.target.value

    this.setState({
      info: nextInfo,
    })
  }

  changeJobText = (jobid, jobParameter, e) => {
    this.setState({
      jobs: this.state.jobs.map((job) => {
        if (jobid === job.id) {
          job[jobParameter] = e.target.value
        }
        return job
      }),
    })
  }

  changeEducText = (educParameter, e) => {
    const nextEduc = { ...this.state.education }

    nextEduc[educParameter] = e.target.value

    this.setState({
      education: nextEduc,
    })
  }

  changeSkillText = (skillid, skillParameter, e) => {
    this.setState({
      skills: this.state.skills.map((skill) => {
        if (skillid === skill.id) {
          skill[skillParameter] = e.target.value
        }
        return skill
      }),
    })
  }

  addJob = () => {
    const nextJobs = [...this.state.jobs]

    nextJobs.push({
      company: "",
      role: "",
      description: "",
      id: uuid(),
    })

    this.setState({
      jobs: nextJobs,
    })
  }

  addSkill = () => {
    const nextSkills = [...this.state.skills]

    nextSkills.push({
      name: "",
      description: "",
      id: uuid(),
    })

    this.setState({
      skills: nextSkills,
    })
  }

  deleteJob = (num) => {
    this.setState({
      jobs: this.state.jobs.filter((job) => {
        return job.id !== num
      }),
    })
  }

  deleteSkill = (num) => {
    this.setState({
      skills: this.state.skills.filter((skill) => {
        return skill.id !== num
      }),
    })
  }

  render() {
    const { info, jobs, education, skills } = this.state

    return (
      <div className="App">
        <div className="paper">
          <h4>Hello, I am a form</h4>
          <GenInfoForm changeInfoText={this.changeInfoText} />

          <JobForm
            jobs={jobs}
            deleteJob={this.deleteJob}
            changeJobText={this.changeJobText}
          />
          <button onClick={this.addJob}>Add another job</button>

          <SkillForm
            skills={skills}
            deleteSkill={this.deleteSkill}
            changeSkillText={this.changeSkillText}
          />
          <button onClick={this.addSkill}>Add another skill</button>

          <EducForm changeEducText={this.changeEducText} />
        </div>
        {/* <div className="middle-arrow"></div> */}
        <div className="paper">
          <CV info={info} jobs={jobs} education={education} skills={skills} />
        </div>
      </div>
    )
  }
}

export default App
