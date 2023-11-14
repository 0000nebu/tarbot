import React from 'react';
import { useState, useEffect} from 'react';
import { singleReading } from '../../../services/reading-service';
import '../../../pages/MultireadingPage/ReadingPage.css'
import '../reading.css'



function SingleReading() {
  
    const  [data, setData] = useState(null)

    useEffect(() => {
        singleReading()
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
          <img className={data?.present.reverse ? 'reverse' : 'straight'} src={data?.present.card.image} alt="image-past" />  
    </section>
        <div className= "reading-text">
        <p>{data?.present.card.description}</p>
          <p>{data?.present.reverse ? data?.present.card.card.reverse.present : data?.present.card.card.straight.present}</p>
        </div>
        </div>
      )}
    </div>
  
  )
}


export default SingleReading