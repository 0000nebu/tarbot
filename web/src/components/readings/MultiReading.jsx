import React from 'react';
import { useState, useEffect} from 'react';
import { multiReading } from '../../services/reading-service';



function MultiReading() {
    const  [data, setData] = useState([])

    useEffect(() => {
        multiReading()
        .then(data => {
          setData(data);
          console.log(data)
        })
    }, []);

  return (
    <div>
        <div className= 'cards'>
    
    </div>
    </div>
  )
}

export default MultiReading