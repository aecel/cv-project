import React, { Component } from "react"
import CV from "./components/CV"
import EducForm from "./components/EducForm"
import ExpForm from "./components/ExpForm"
import GenInfoForm from "./components/GenInfoForm"
import style from "./styles/style.css"

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
      jobNum: 1,
    }
  }

  changeInfoText = (infoParameter, e) => {
    const nextInfo = { ...this.state.info }

    nextInfo[infoParameter] = e.target.value

    this.setState({
      info: nextInfo,
    })
  }

  addJob = () => {
    this.setState({ jobNum: this.state.jobNum + 1 })
  }

  render() {
    const { info, jobNum } = this.state

    return (
      <div className="App">
        <div className="paper">
          <h4>Hello, I am a form</h4>
          <GenInfoForm changeInfoText={this.changeInfoText} />
          <div className="job-forms">
            <h4>Job Experience</h4>
            <ExpForm num={jobNum} />
            <button className="add-job-form" onClick={this.addJob}>
              Add another job
            </button>
          </div>

          <h4>Education</h4>
          <EducForm />
        </div>
        {/* <div className="middle-arrow"></div> */}
        <div className="paper">
          <CV info={info} />
        </div>
      </div>
    )
  }
}

export default App
