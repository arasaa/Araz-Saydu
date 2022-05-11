import React from 'react';
import './stickySidebar.css';
import SpeedDial from './SpeedDial'


const StickySidebar = (props) => {
  
  return (
    <>
        <div  className="sticky-sidebar"  >
        <div className="PlaygroundSpeedDial">
         <SpeedDial />
        </div>

    </div>

    </>
    
  )
}

export default StickySidebar