import React from 'react';
import { useState, useEffect} from 'react';
import { multiReading } from '../../../services/reading-service';
import '../../../pages/MultireadingPage/ReadingPage.css'
import '../reading.css'




function MultiReading() {
    const  [data, setData] = useState(null)

    useEffect(() => {
        multiReading()
        .then(data => {
          setData(data.data.cards);
         
        })
    }, []);

    console.log(data)

  return (
    <div>
      {data && (
        <div className='bug'>
        <section className= 'cards-reading'>
        <img className={data?.past.reverse ? 'reverse' : 'straight'} src={data?.past.card.image} alt="image-past" />
          <img className={data?.present.reverse ? 'reverse' : 'straight'} src={data?.present.card.image} alt="image-past" />
          <img className={data?.future.reverse ? 'reverse' : 'straight'} src={data?.future.card.image} alt="image-past" />   
    </section>
        <div className= "reading-text">
          <p>{data?.past.reverse ? data?.past.card.card.reverse.past : data?.past.card.card.straight.past}</p>
          <p>{data?.present.reverse ? data?.present.card.card.reverse.present : data?.present.card.card.straight.present}</p>
          <p>{data?.future.reverse ? data?.future.card.card.reverse.future : data?.future.card.card.straight.future}</p>
        </div>
        </div>
      )}
    </div>
  )
}

export default MultiReading