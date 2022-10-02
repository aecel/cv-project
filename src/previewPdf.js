import jsPDF from "jspdf"
import Lato from "./styles/Lato-Regular-normal.js"
import Latobold from "./styles/Lato-Bold-bold.js"

const previewPdf = ([info, jobs, skills, education]) => {
  const myPdf = new jsPDF()

  // Spacing
  let nextY = 60 // The changing y coord
  const x = 10 // The constant x coord or the left margin
  const lineLength = 195
  const pageHeight = 285

  const printHeader = () => {
    // Filled light gray rectangle
    myPdf.setDrawColor(0)
    myPdf.setFillColor(225, 225, 225)
    myPdf.rect(0, 30, 220, 267, "F")

    // Filled dark gray rectangle
    myPdf.setDrawColor(0)
    myPdf.setFillColor(29, 29, 29)
    myPdf.rect(0, 0, 220, 50, "F")

    // Full Name
    myPdf.setFont("Lato-Bold", "bold")
    myPdf.setFontSize(26)
    myPdf.setTextColor("#ffffff")
    myPdf.text(info.fullName, x, 18)

    // Current Role
    myPdf.setFontSize(12)
    myPdf.setTextColor("#c5c5c5")
    myPdf.setFont("Lato-Regular", "normal")
    myPdf.text(info.role, x, 25)

    // Email and Phone Number
    myPdf.setFontSize(10)
    myPdf.setTextColor("#c5c5c5")
    myPdf.text(info.email, x, 34)
    myPdf.text(info.phoneNumber, x, 41)

    // Start of light gray area is (x, 60)
    myPdf.setTextColor("#1d1d1d")
    myPdf.setFontSize(10)
  }

  printHeader()

  // Professional Experience
  if (
    jobs.length === 0 ||
    (jobs.length <= 1 &&
      jobs[0].company === "" &&
      jobs[0].role === "" &&
      jobs[0].description === "")
  ) {
  } else {
    // Professional Experience Heading and Line
    nextY += 2
    myPdf.setFont("Lato-Bold", "bold")
    myPdf.setFontSize(14)
    myPdf.text("Professional Experience", x, nextY)
    myPdf.setDrawColor(29, 29, 29)
    myPdf.line(x, nextY + 3, lineLength, nextY + 3, "S")
    nextY += 10

    // Preparing for each job
    myPdf.setFont("Lato-Regular", "normal")
    myPdf.setFontSize(10)

    // Printing each job
    for (const job of jobs) {
      if (nextY + 22 >= pageHeight) {
        myPdf.addPage()
        printHeader()
        nextY = 60
      }
      nextY += 2
      myPdf.setFont("Lato-Bold", "bold")
      myPdf.text(job.company, x, nextY)
      myPdf.text(job.role, x, nextY + 6)
      myPdf.setFont("Lato-Regular", "normal")
      const splitText = myPdf.splitTextToSize(job.description, 180)
      myPdf.text(splitText, x, nextY + 12)
      const dimension = myPdf.getTextDimensions(splitText)
      nextY = nextY + dimension.h + 20
    }
  }

  // Skills
  if (
    skills.length === 0 ||
    (skills.length <= 1 &&
      skills[0].name === "" &&
      skills[0].description === "")
  ) {
  } else {
    // Skills Heading and Line
    if (nextY + 12 >= pageHeight) {
      myPdf.addPage()
      printHeader()
      nextY = 60
    }
    nextY += 2
    myPdf.setFont("Lato-Bold", "bold")
    myPdf.setFontSize(14)
    myPdf.text("Skills", x, nextY)
    myPdf.setDrawColor(29, 29, 29)
    myPdf.line(x, nextY + 3, lineLength, nextY + 3, "S")
    nextY += 10

    // Preparing for each skill
    myPdf.setFont("Lato-Regular", "normal")
    myPdf.setFontSize(10)

    // Printing each skill
    for (const skill of skills) {
      if (nextY + 16 >= pageHeight) {
        myPdf.addPage()
        printHeader()
        nextY = 60
      }
      nextY += 2
      myPdf.setFont("Lato-Bold", "bold")
      myPdf.text(skill.name, x, nextY)
      myPdf.setFont("Lato-Regular", "normal")
      const splitText = myPdf.splitTextToSize(skill.description, 180)
      myPdf.text(splitText, x, nextY + 6)
      const dimension = myPdf.getTextDimensions(splitText)
      nextY = nextY + dimension.h + 14
    }
  }

  // Education
  if (education.universityName === "" && education.degree === "") {
  } else {
    // Education Heading and Line
    if (nextY + 12 + 18 >= pageHeight) {
      myPdf.addPage()
      printHeader()
      nextY = 60
    }
    nextY += 2
    myPdf.setFont("Lato-Bold", "bold")
    myPdf.setFontSize(14)
    myPdf.text("Education", x, nextY)
    myPdf.setDrawColor(29, 29, 29)
    myPdf.line(x, nextY + 3, lineLength, nextY + 3, "S")
    nextY += 10

    // Preparing for education
    myPdf.setFont("Lato-Regular", "normal")
    myPdf.setFontSize(10)

    // Printing education details
    myPdf.setFont("Lato-Bold", "bold")
    nextY += 2
    myPdf.text(education.universityName, x, nextY)
    myPdf.setFont("Lato-Regular", "normal")
    myPdf.text(education.degree, x, nextY + 6)
    nextY = nextY + 16
  }

  return myPdf
}

export default previewPdf
