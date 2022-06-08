import React from 'react'
import './about.css'
import araz from '../../assets/araz-saydu.png'
import aras from '../../assets/aras.jpg'


const About = () => {
  return (
    <div className="about-container hover-2">
      
    <div className="div-about">
      <figure className="figureBoth front"> <img className="araz" src={araz}/></figure>
      <figure className="figureBoth back"><img className="aras" src={aras}/></figure>
    </div>
    <div className="div-about-2">
      <figure className="figureBoth front-2"></figure>
      <figure className="figureBoth back-2"></figure>
    </div>

<section className="about-section">
    <p className='section-text'>
    Hi,
I am Araz,
 As a full stack web developer
 with a problem-solving mentality and passion for programming in JAVA
  and coding in JavaScript, I am now looking for opportunities to apply
   my expertise and gain new practical knowledge in a like-minded team.

I have a passion to learn everything new about JavaScript and its relevant
 libraries and technologies, which is why I am ready to embark on a new
  journey in your company or project and be your IT-solution.
   Let's make it a success together!"
<br/>
<br/>I was born in Syria, Qamishli.
<br/>living in Germany, Berlin




    </p>
     
      </section>

    </div>
  )
}

export default About