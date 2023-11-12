import React from 'react';
import { useState, useEffect} from 'react';
import { multiReading } from '../../services/reading-service';



function MultiReading() {
    const  [data, setData] = useState([])

    useEffect(() => {
        multiReading()
        .then(data => {
          setData(data);
          console.log(data?.data.cards.past.card.image)
          console.log(data?.data.cards.past.reverse)
         
        })
    }, []);

  return (
    <div>
        <div className= 'cards-reading'>
        <img className={data?.data.cards.past.reverse ? 'reverse' : 'straight'} src={data?.data.cards.past.card.image} alt="image-past" />
          <img className={data?.data.cards.present.reverse ? 'reverse' : 'straight'} src={data?.data.cards.present.card.image} alt="image-past" />
          <img className={data?.data.cards.future.reverse ? 'reverse' : 'straight'} src={data?.data.cards.future.card.image} alt="image-past" /> 
        
    </div>
    </div>
  )
}

export default MultiReading