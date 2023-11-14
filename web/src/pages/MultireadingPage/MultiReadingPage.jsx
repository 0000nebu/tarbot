import React from 'react'
import { Link } from "react-router-dom";
import candle from '../../assets/candle_2.gif'
import candlee from '../../assets/candle_1.gif'
import plant from '../../assets/planta.png'
import './ReadingPage.css'
import MultiReading from '../../components/readings/Multireading/MultiReading'


function MultiReadingPage() {
  return (
    <div className="table">
      <section className='table-elements'>
      <div className="candles">
      <img className="candle-1" src={candle} alt="candle-image" />
      <img className="candle-2" src={candlee} alt="candle-image" />
      </div>
      <img className="plant" src={plant} alt="plant-image" />
      </section>
      <div className="cardsOfReading">
        <MultiReading/>
      </div>
      <div className="reading-button">
      <Link to="/profile">
      <button className="button">Profile</button>
      </Link>
      </div>
    </div>
    
  
  )
}

export default MultiReadingPage