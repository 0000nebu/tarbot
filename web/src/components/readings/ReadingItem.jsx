import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { readingsDetail } from '../../services/reading-service';
import { updateAdviceLove } from '../../services/reading-service';
import { updateAdviceEmoji } from '../../services/reading-service';
import './reading.css'


function ReadingItem() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [readingData, setReadingData] = useState([]);
  const [showAdviceLove, setShowAdviceLove] = useState(false);
  const [showAdviceEmoji, setShowAdviceEmoji] = useState(false);

  useEffect(() => {
    readingsDetail(params.id)
      .then(data => {
        setData(data.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [params.id]);
  console.log(data)


  useEffect(() => {
    if (showAdviceLove) {
      updateAdviceLove(params.id)
        .then(readingData => {
          setReadingData(readingData);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else if (showAdviceEmoji)
      updateAdviceEmoji(params.id)
        .then(readingData => {
          setReadingData(readingData);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
  }
    , [params.id, showAdviceLove, showAdviceEmoji]);

  console.log(readingData)

  const handleShowAdviceLove = () => {
    setShowAdviceLove(true);
  }

  const handleshowAdviceEmoji = () => {
    setShowAdviceEmoji(true);
  }


  //faltaria el formulario para enviar la info al body. 

  return (
    <section>
      <section>
        {data.cards &&
          <div className="reading-detail-items">
            {data.multi ?
              <div className='detail-cards'>
                <img className={data.cards.past?.reverse ? 'reverse' : 'straight'} src={data.cards.past?.card?.image} alt={data.id} />
                <img className={data.cards.present?.reverse ? 'reverse' : 'straight'} src={data.cards.present?.card?.image} alt={data.id} />
                <img className={data.cards.future?.reverse ? 'reverse' : 'straight'} src={data.cards.future?.card?.image} alt={data.id} />
              </div> :
              <div className='detail-cards'>
                <img className={data.cards.present?.reverse ? 'reverse' : 'straight'} src={data.cards.present?.card?.image} alt={data.id} />
              </div>
            }

            <div className='detail-text-items'>
              {data.multi ?
                <div className='detail-text'>
                  <h2 className='detail-title' >{data.cards.past?.card?.name}-{data.cards.present?.card?.name}-{data.cards.future?.card?.name}</h2>
                  <p>{data.cards.past?.reverse ? data.cards.past.card.card.reverse.past : data.cards.past.card.card.straight.past}</p>
                  <p>{data.cards.present?.reverse ? data.cards.present.card.card.reverse.present : data.cards.present.card.card.straight.present}</p>
                  <p>{data.cards.future?.reverse ? data.cards.future.card.card.reverse.future : data.cards.future.card.card.straight.future}</p>
                </div> :
                <div className='detail-text'>
                  <h2 className='detail-title' >{data.cards.present?.card?.name}</h2>
                  <p>{data.cards.present?.card?.description}</p>
                  <p>{data.cards.present?.reverse ? data.cards.present.card.card.reverse.present : data.cards.present.card.card.straight.present}</p>
                </div>
              }
            </div>
          </div>
        }


      </section>

      <div className='advice'>
      <h3>do you need any advice?</h3>
        <div className='advice-buttons'> 
      <button onClick={handleShowAdviceLove} className="button">
        about love
      </button>
      <button onClick={handleshowAdviceEmoji} className="button">
        about work
      </button>
      </div>
      <p>{readingData.data?.advice}</p>
      </div>
    </section>
  );
}

export default ReadingItem;
