import React from 'react';
import { useState, useEffect} from 'react';
import { multiReading } from '../../services/reading-service';



function MultiReading() {
    const  [data, setData] = useState([])

    useEffect(() => {
        multiReading()
        .then(data => {
          setData(data);
        
        })
    }, []);

  return (
    <h3> {data?.cards}</h3>
  )
}

export default MultiReading