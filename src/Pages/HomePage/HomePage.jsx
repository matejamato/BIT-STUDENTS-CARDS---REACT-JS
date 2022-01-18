import React, { useState } from 'react'
import './home-page.css'
import StudentCard from '../../Components/StudentCard/StudentCard';
import LecturerCard from '../../Components/LecurerCard/LecturerCard';
import ModalMoreDetails from '../../Components/ModalMoreDetails/ModalMoreDetails';
import ModalAddNewStudent from '../../Components/ModalAddStudent/ModalAddStudent';

function HomePage(props) {
  const [moreDetailsModalIsOpen, setMoreDetailsModalIsOpen] = useState(false)
  const [addNewStudentModalIsOpen, setAddNewStudentModalIsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  return ( 
    <div>
      <header>
        <h1>BIT STUDENTS</h1>
        <button onClick={()=>setAddNewStudentModalIsOpen(true)}>Add New Student</button>
      </header>
      <h1>Spisak svih studenata</h1>
      <div className="student-cards-wrapper">{props.students.map((e)=> <StudentCard setStudents={props.setStudents} setValidData={props.setValidData}
      setMoreDetailsModalIsOpen={setMoreDetailsModalIsOpen} setSelectedCard={setSelectedCard} student={e}/>)}</div>
      <h1>Spisak predavaca</h1>
      {props.lecturers.map((e)=> <LecturerCard setSelectedCard={setSelectedCard} setMoreDetailsModalIsOpen={setMoreDetailsModalIsOpen} lecturer={e}/>)}
      {addNewStudentModalIsOpen && <ModalAddNewStudent setValidData={props.setValidData} setAddNewStudentModalIsOpen={setAddNewStudentModalIsOpen}/>}
      {moreDetailsModalIsOpen && <ModalMoreDetails selectedCard={selectedCard} setMoreDetailsModalIsOpen={setMoreDetailsModalIsOpen}/>}
    </div>
   );
}

export default HomePage;