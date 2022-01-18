import React from 'react'
import './modal-more-details.css'

function ModalMoreDetails(props) {
  return ( 
    <div className="modal-more-details-background">
      <div className="modal-more-details-content">
        <h2>More details</h2>
        <p>{props.selectedCard.firstName}</p>
        <p>{props.selectedCard.lastName}</p>
        <p>{props.selectedCard.yob}</p>
        {props.selectedCard.indexNum && <p>{props.selectedCard.indexNum}</p>}
        {props.selectedCard.subject && <p>{props.selectedCard.subject}</p>}
        <button className="close-modal" onClick={()=>props.setMoreDetailsModalIsOpen(false)}>x</button>
      </div>
    </div>
   );
}

export default ModalMoreDetails;