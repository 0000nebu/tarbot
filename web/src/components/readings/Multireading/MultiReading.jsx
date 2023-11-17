import React from 'react';
import { useState, useEffect } from 'react';
import { multiReading } from '../../../services/reading-service';
import { Link } from 'react-router-dom';
import '../../../pages/MultireadingPage/ReadingPage.css'
import '../reading.css'




function MultiReading() {
  const [data, setData] = useState(null)
  const [autoFlip, setAutoFlip] = useState(false);

  useEffect(() => {
    multiReading()
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
          <div className='cards-reading'>
            <div className={`card ${autoFlip ? 'flipped' : ''}`}>
              <img className="card-back" src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="back-image" />
              <img className={`card-front ${data.past?.reverse ? 'reverse' : 'straight'}`} src={data.past?.card.image} alt={data.id} />
            </div>
            <div className={`card ${autoFlip ? 'flipped' : ''}`}>
              <img className="card-back" src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="back-image" />
              <img className={`card-front ${data.present?.reverse ? 'reverse' : 'straight'}`} src={data.present?.card.image} alt="image-past" />
            </div>
            <div className={`card ${autoFlip ? 'flipped' : ''}`}>
              <img className="card-back" src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="back-image" />
              <img className={` ${data.future?.reverse ? 'reverse' : 'straight'} card-front`} src={data.future?.card.image} alt="image-past" />
            </div>
          </div>
          <div className={`reading-text transparent ${autoFlip ? 'start' : ''}`}>
            <p>{data?.past.reverse ? data?.past.card.card.reverse.past : data?.past.card.card.straight.past}</p>
            <p>{data?.present.reverse ? data?.present.card.card.reverse.present : data?.present.card.card.straight.present}</p>
            <p>{data?.future.reverse ? data?.future.card.card.reverse.future : data?.future.card.card.straight.future}</p>
            <div className="reading-button-single">
              <Link to="/profile">
                <button className="button">Profile</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MultiReading