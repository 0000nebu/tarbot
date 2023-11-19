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
  } 
  console.log(data)

  

  return (
    <section>
      <section className="reading-list">
        {data && data.map((reading) => (
          
          <div className="reading-item" key={reading.id}>
            <Link to={`/profile/${reading.id}`}>
            {reading.multi ?
            <div className= 'cards'>
              <img className={reading.cards.past?.reverse ? 'reverse' : 'straight'}  src={reading.cards.past.card.image} alt={reading.id} />
              <img className={reading.cards.present?.reverse ? 'reverse' : 'straight'} src={reading.cards.present.card.image} alt={reading.id} />
              <img className={reading.cards.future?.reverse ? 'reverse' : 'straight'} src={reading.cards.future.card.image} alt={reading.id} />
            </div>:
            <div className= 'cards'>
             <img className={reading.cards.present?.reverse ? 'reverse' : 'straight'}  src={reading.cards.present.card.image} alt={reading.id} />
            </div>
            }         
           </Link>
           <h3 className='card-tittle-profile'> {reading.cards.past?.card.name} {`- ${reading.cards.present?.card.name} -`} {reading.cards.future?.card.name}</h3>
            <h3>
              {new Date(reading.createdAt).toLocaleString("en-EN" ,
	              {day: "2-digit", month: "long", year: "numeric"})}
            </h3>
          
          </div>
        ))}
      </section>
    </section>
  )
}

export default ReadingsList