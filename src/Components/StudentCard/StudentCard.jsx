import React from 'react'
import './student-card.css'

function StudentCard(props) {

  const changeEmployment = () => {
    fetch(`https://61b9fd7e48df2f0017e5a83d.mockapi.io/students/${props.student.id}`, {
      method: "PUT",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        isEmployed: true
      })
    })
    .then(res=>res.json())
    .then(res=> {props.setStudents(res) //kako ovo
      props.setValidData(false)})
  }

  return ( 
    <div className="student-card">
      <h2>{props.student.firstName}</h2>
      <h3>{props.student.lastName}</h3>
      <button onClick={changeEmployment}>Change to employed</button>
      <button onClick={()=>{
        props.setSelectedCard(props.student)
        props.setMoreDetailsModalIsOpen(true)
        }}>More details</button>
    </div>
   );
}

export default StudentCard;