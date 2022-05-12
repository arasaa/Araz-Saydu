import React from 'react'
import './projects.css'
import airQuality from '../../assets/air-quality.png'

const Projects = () => {
  return (
    <>
    <div className="project-container">
      <h1 className="project-title">Air-Quality</h1>
      <div className="project-box">
        <img className="air-quality" src={airQuality}></img>
      </div>
    </div>
    </>
  )
}

export default Projects