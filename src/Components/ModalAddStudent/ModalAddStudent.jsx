import React, { useState } from 'react'
import './modal-add-new-student.css'

function ModalAddNewStudent(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [yob, setYob] = useState('')
  const [indexNum, setIndexNum] = useState('')
  const [employed, setEmployed] = useState('')
  const [yoe, setYoe] = useState('')

  const submitNewStudent = () => {
    fetch('https://61b9fd7e48df2f0017e5a83d.mockapi.io/students', {
      method: "POST",
      headers: {
          "Content-Type" : 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName : lastName,
        yob: yob,
        indexNum: indexNum,
        isEmployed : employed,
        startingDateOfUni : yoe
      })
    })
    .then(res=> res.json())
    .then((res)=> {
      props.setAddNewStudentModalIsOpen(false)
      props.setValidData(false)
    })
  }

  return ( 
    <div className='add-new-student-background'>
      <div className="add-new-student-content">
        <h2>Add new student</h2>
        <label htmlFor="first-name">First name:</label>
        <input type="text" name="first-name" onChange={(e)=>setFirstName(e.target.value)}/>
        <label htmlFor="last-name">Last name:</label>
        <input type="text" name="last-name" onChange={(e)=>setLastName(e.target.value)}/>
        <label htmlFor="yob">Year of birth:</label>
        <input type="number" name="yob" onChange={(e)=>setYob(e.target.value)}/>
        <label htmlFor="index-number">Index number</label>
        <input type="number" name="index-number" onChange={(e)=>setIndexNum(e.target.value)}/>
        <label htmlFor="is-employed">Is employed:</label>
        <div onChange={(e)=>setEmployed(e.target.value)}>
        <input type="radio" name="employed" value="true"/>Yes
        <input type="radio" name="employed" value="false"/>No
        </div>
        <label htmlFor="year-enrl">Year of enrollment: </label>
        <input type="number" name="year-enrl" onChange={(e)=>setYoe(e.target.value)}/>
        <button className="submit-button" onClick={submitNewStudent}>Submit</button>
        <button onClick={()=>props.setAddNewStudentModalIsOpen(false)} className="close-add-modal">x</button>
      </div>
    </div>
   );
}

export default ModalAddNewStudent;