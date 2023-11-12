import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getReadings } from '../../services/reading-service';
import "./reading.css"

function ReadingsList() {
  const [data, setData] = useState([])

  useEffect(() => {
    getReadings()
      .then(data => {
        setData(data.data);


      })
  }, []);

  if (!data) {
    return <div>Loading...</div>
  } else { console.log(data) }

  

  return (
    <section>
      <section className="reading-list">
        {data.map((reading) => (
          <div className="reading-item" key={reading.id}>
            <div className= 'cards'>
              <img className={reading.cards.past.reverse ? 'reverse' : 'straight'}  src={reading.cards.past.card.image} alt={reading.id} />
              <img className={reading.cards.present.reverse ? 'reverse' : 'straight'} src={reading.cards.present.card.image} alt={reading.id} />
              <img className={reading.cards.future.reverse ? 'reverse' : 'straight'} src={reading.cards.future.card.image} alt={reading.id} />
            </div>
            <h3>
              {reading.createdAt.toLocaleString("es-ES" ,
	              {day: "2-digit", month: "long", year: "numeric"})}
            </h3>
          </div>
        ))}
      </section>
    </section>
  )
}

export default ReadingsList