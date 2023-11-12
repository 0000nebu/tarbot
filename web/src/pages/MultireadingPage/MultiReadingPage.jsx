import React from 'react'
//import MultiReading from '../../components/readings/MultiReading'
import candle from '../../assets/candle_2.gif'
import candlee from '../../assets/candle_1.gif'
import plant from '../../assets/planta.png'
import './Multireading.css'


function MultiReadingPage() {
  return (
    <div className="table">
      <div className="candles">
      <img className="candle-1" src={candle} alt="candle-image" />
      <img className="candle-2" src={candlee} alt="candle-image" />
      </div>
      <img src={plant} alt="plant-image" />
    </div>
    
  )
}

export default MultiReadingPage