import React from 'react';
import './stickySidebar.css';
import FacebookOutlined from '@material-ui/icons/Facebook'
import Example from '../test/Example';

function social(){

  return (
    <h1 style={{color: 'white'}}>aras aras</h1>
  )
} 
const StickySidebar = (props) => {
  
  return (
    <>
        <div  className="sticky-sidebar"  >
          {/* className="sticky-sidebar-lesson" */}
      {/* <h1><small>Day #15</small> Sticky Sidebar <small>Final Version</small></h1> */}

      {/* data-tooltip='' */}
      {/* className="sticky-sidebar" */}

        <Example />

    </div>

    </>
    
  )
}

export default StickySidebar