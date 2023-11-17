import React from 'react'
import { Link } from "react-router-dom";
import SingleReading from '../../components/readings/Singlereading/singleReading'
import '../MultireadingPage/ReadingPage.css'
import candle from '../../assets/candle_2.gif'
import candlee from '../../assets/candle_1.gif'
import plant from '../../assets/planta.png'

function SingleReadingPage() {
  return (
    <section>
    <div className="table">
      <section className='table-elements'>
      <div className="candles">
      <img className="candle-1" src={candle} alt="candle-image" />
      <img className="candle-2" src={candlee} alt="candle-image" />
      </div>
      <img className="plant" src={plant} alt="plant-image" />
      </section>
      <div className="cardsOfReading">
        <SingleReading/>
      </div>
      
      
    </div>
    </section>
  )
}

export default SingleReadingPage