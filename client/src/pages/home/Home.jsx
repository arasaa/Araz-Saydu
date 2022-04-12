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
    </>
  )
}

export default Home