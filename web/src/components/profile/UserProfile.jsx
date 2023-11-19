import React from 'react'
import { useState, useEffect} from 'react';
import {userDetail} from "../../services/user-service"
import "./profile.css"

  
function UserProfile() {
    const  [data, setData] = useState(null)

    useEffect(() => {
        userDetail()
        .then(data => {
          setData(data.data.user);
        })
    }, []);

    if (!data) {
        return <div>Loading...</div>
      }
      
      //siempre que se cargue data que se renderice lo que está dentro de los paréntesis (data && ())
  return (
    <div className='heading-profile'>
    
      {data && (
        <div className='prueba-prueba'>
         <img className='image-profile' src={data?.avatar} alt={data?.id} />
         <h1 className ='username'>{data?.username}</h1>   
         </div>
      )}
  </div>
  )
}

export default UserProfile