import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import {AiOutlineClose} from 'react-icons/ai';
import {BiMenuAltRight} from 'react-icons/bi';
import { useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })


  //closing menu when it is media screen and BiMenuAltRight is open
  const closeMenu = () => {
    if(menuOpen){
      setMenuOpen(false)
    }
  }


  useEffect(() => {
        const handleResize = () => {
          setSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if(size.width > 768 && menuOpen){
    setMenuOpen(true)
  }
  }, [size.width, menuOpen])


  //ist to open and close menu
  const menuToogleHandler = () => {
    setMenuOpen((p) => !p);
  }


  return (

    //classes.header is in header.module.scss
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div>
      <h1 className={classes.header__logo}>Araz Saydu</h1>
      </div>

      {/* nav is inside header && content*/}
        <nav className={`${classes.header_content_nav} ${menuOpen ? classes.isMenu : ""}`}>
          <ul >
            <li onClick={closeMenu}>
              <Link to={"/"}>Home</Link>
              
            </li>
            <li onClick={closeMenu}>
              <Link to={"/about"} >About</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={"/projects"} >Projects</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={"/gallery"} >Gallery</Link>
            </li>
          </ul>
          {/* button is inside NAV */}
          {/* <button>CTA page</button> */}
        </nav>
        {/* toggle navbar */}
        <div className={classes.header_content_toggle}>
          {menuOpen ?  ( <AiOutlineClose onClick={menuToogleHandler} /> ) :  ( <BiMenuAltRight onClick={menuToogleHandler} /> )  }

        </div>

        {/* closing header-content div */}
        </div>
    </header>
  )
}

export default Header