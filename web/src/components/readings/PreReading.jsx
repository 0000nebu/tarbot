import React from 'react'
import sunMove from '../../assets/sun_move.gif'
import './reading.css'

function PreReading() {
  return (
    <div className='conecting'>
        <img className='sun-move' src={sunMove} alt="sun-move" />
        <p>Connecting the cosmos with the code...</p>
    </div>
  )
}

export default PreReading