import React from 'react'
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { getReadings } from '../../services/reading-service';


function ReadingsList() {
    const  [data, setData] = useState([])

    useEffect(() => {
      getReadings()
        .then(data => {
          setData(data);
        
        })
    }, []);

    if (!data) {
      return <div>Loading...</div>
    }

  return (
    <section>
      <h1>readings</h1>
      <section className="row">
        {data.map((reading) => (
          <div className="col-3 p-5" key={reading.id}>
            <h3>
              <Link to={`/profile/${reading.id}`}>{reading.cards}</Link>
            </h3>
            
          </div>
        ))}
      </section>
    </section>
  )
}

export default ReadingsList