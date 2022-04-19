import React from 'react'
import  './home.css';
import araz from '../../assets/araz-saydu.png';

const Home = () => {
  return (
    <>
      <div className="defines-Head">
        <h1 className="defines-H1" data-text="FULL STACK WEB DEVELOPER">FULL STACK WEB DEVELOPER</h1>
      </div>

      <div className="self-pic-Box">
        < img className="self-pic" alt="Araz Saydu" src={araz} />
      </div>
   
   <section className="skill-container">
     <div className="skill-div">
      <h1 className="skill-JAVA center">Javascript</h1>
      <h1 className="skill-REACT">React.js</h1>
      <h1 className="skill-CSS">CSS</h1>
      <h1 className="skill-HTML">HTML</h1>
     </div>

   </section>
    </>
  )
}

export default Home