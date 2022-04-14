import React from 'react'
import './stickySidebar.css'

const StickySidebar = () => {
  return (
    <>
        <div className="sticky-sidebar-lesson">
      {/* <h1><small>Day #15</small> Sticky Sidebar <small>Final Version</small></h1> */}

      <div className="sticky-sidebar"  data-tooltip={"aras is a full stack web developer"}>
        <h4>Sticky sidebar!</h4>
        <p>Scroll down to see.</p>
      </div>

    </div>

    </>
    
  )
}

export default StickySidebar