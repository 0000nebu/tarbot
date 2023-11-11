import React from 'react'
import { useState, useEffect} from 'react';



function ReadingsList() {
    const  [data, setData] = useState([])

    useEffect(() => {
      readingsDetail()
        .then(data => {
          setData(data);
        
        })
    }, []);

function ReadingItem() {
  return (
    <>
    
    <h3>cards {data?.cards}</h3>
    <h3>beers {data?.description}</h3>
    
    </>
  )
}
}

export default ReadingItem