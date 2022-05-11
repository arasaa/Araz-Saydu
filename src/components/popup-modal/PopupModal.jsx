import React from 'react'
import './popupModal.css'



const PopupModal = (props) => {
  return ( props.trigger) ?(
    <>
        <div className="popup-modal">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
          </div>
        </div>
    </>
  ) : "";
}

export default PopupModal