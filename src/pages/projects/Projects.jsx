import React, { useState } from 'react'
import './projects.css'
import airQuality from '../../assets/air-quality.png'

const Projects = () => {
  const [isShown, setIsShown] = useState(false)
  function changeOpacity(e) {
    if(isShown) {
      e.target.style.background = '#DEB887';
    }
  }
  return (
    <>
    <div className="project-container">
      <h1 className="project-title">Air-Quality</h1>
      <div className="project-box">
        <figure className="project-about-container"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}

        >
        <img className="air-quality" src={airQuality} alt="air quality" 
        
        ></img>
       {isShown && (
         <figcaption className="project-figcaption" onMouseEnter={changeOpacity}>
           <a href="https://air-quality-p.herokuapp.com/" className="airQualityLink" target="_blank" alt="Air Quality" rel="noreferrer">
              <button className="airQualityButton">visit Air-Quality</button>
          </a>   
          <h2 className="project-heading-about about-visibile">About Air-Quality</h2>
        <p className="project-about about-visibile">lorem ipsum dolor sit am
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        lorem ipsum dolor sit amlorem ipsum dolor sit am<br />
        </p>
        </figcaption>
        )}
        </figure>
        
        {/* <img className="air-quality" src={airQuality}></img> */}
      </div>
    </div>
    </>
  )
}

export default Projects