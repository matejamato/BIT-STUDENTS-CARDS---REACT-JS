import React from 'react'
import './lecurer-card.css'

function LecturerCard(props) {
  return ( 
    <div className='lecturer-card'>
      <h2>{props.lecturer.firstName}</h2>
      <h3>{props.lecturer.lastName}</h3>
      <button onClick={()=>{
        props.setSelectedCard(props.lecturer)
        props.setMoreDetailsModalIsOpen(true)
      }
        }>More details</button>
    </div>
   );
}

export default LecturerCard;