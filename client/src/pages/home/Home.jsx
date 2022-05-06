import React from 'react'
import  './home.css';
import araz from '../../assets/araz-saydu.png';

const Home = () => {
  return (
    <>
      <div className="defines-Head">
        <h1 className="defines-H1" data-text="FULL STACK WEB DEVELOPER"><span className="full">FULL</span><span className="stack"> STACK</span><span className="web"> WEB</span> <span className="developer">DEVELOPER</span></h1>
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
     <div className="skill-div2">
     <h1 className="skill-Express center2">node.<span className="j">js</span></h1>
      <h1 className="skill-Express center2">express<span className="j">js</span></h1>
      <h1 className="skill-REACT">React.js</h1>
      <h1 className="skill-CSS">CSS</h1>
     </div>

   </section>
    </>
  )
}

export default Home