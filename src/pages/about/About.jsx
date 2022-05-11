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
I am Araz and I can be your IT-solution. As a full stack web developer with a problem-solving mentality and passion for programming in JAVA and coding in JavaScript, I am now looking for opportunities to apply my expertise and gain new practical knowledge in a like-minded team."My enthusiasm for web development started when I was trying to create a portfolio for me to write there some thoughts.
So i built one on Google Blogger and tried to improve it.
i should learn HTML and CSS to do that.
This led me to accomplish my portfolio and then learn the basics of PHP.
I found out I love programming and want to learn more and more but I should know what exactly I need and love to learn which programming language?
I learned JAVA till an advanced level at the latest I chose JAVASCRIPT where I found my self and love to code with!
I have a passion to learn everything new about JavaScript and its relevant libraries and technologies, which is why I am ready to embark on a new journey in your company or project. Let's make it a success together!"
<br/>
<br/>I was born in Syria, Qamishli.
<br/>living in Germany, Berlin


    </p>
     
      </section>

    </div>
  )
}

export default About