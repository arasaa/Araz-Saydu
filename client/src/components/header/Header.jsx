import React from 'react'
import { Link } from 'react-router-dom'
import'./header.css'
import classes from './Header.module.scss'
import {AiOutlineClose} from 'react-icons/ai';
import {BiMenuAltRight} from 'react-icons/bi';

const Header = () => {
  return (

    //classes.header is in header.module.scss
    <header className={classes.header}>
      <div className={classes.header_content}>
      <h2 className={classes.header_logo}>navbar</h2>
     

      {/* nav is inside header */}
        <nav className={classes.header_content_nav}>
          <ul>
            <li>
              <Link to={"/"} >Home</Link>
            </li>
            <li>
              <Link to={"/about"} >About</Link>
            </li>
            <li>
              <Link to={"/gallery"} >Gallery</Link>
            </li>
          </ul>
          {/* button is inside NAV */}
          <button>CTA page</button>
        </nav>
        {/* toggle navbar */}
        <div className="classes.header_content_toggle">
          <BiMenuAltRight />

        </div>
        
        {/* closing header-content div */}
        </div>
    </header>
  )
}

export default Header