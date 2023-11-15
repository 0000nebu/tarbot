import React from 'react';
import { useState, useEffect} from 'react';
import { singleReading } from '../../../services/reading-service';
import '../../../pages/MultireadingPage/ReadingPage.css'
import '../reading.css'



function SingleReading() {
  
    const  [data, setData] = useState(null)
    const [autoFlip, setAutoFlip] = useState(false);

    useEffect(() => {
        singleReading()
        .then(data => {
          setData(data.data.cards);
         
        })
    }, []);
    
    useEffect(() => {
      const autoFlipTimeout = setTimeout(() => {
        setAutoFlip(true);
      }, 2000);
      return () => clearTimeout(autoFlipTimeout);
    }, []);
    console.log(data)

  return (
    <div>
        {data && (
        <div className='bug'>
        <section className= 'cards-reading'>
        <div className={`card ${autoFlip ? 'flipped' : ''}`}>
              <img className="card-back" src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="back-image" />
              <img className={`card-front ${data.present?.reverse  ? 'reverse' : 'straight'}`} src={data.present?.card.image} alt="image-past" />
            </div>
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