import React from 'react'
import { useState, useEffect} from 'react';
import {userDetail} from "../../services/user-service"
import "./profile.css"


    
function UserProfile() {
    const  [data, setData] = useState([])

    useEffect(() => {
        userDetail()
        .then(data => {
          setData(data);
          console.log(data.data.user.avatar)
        })
    }, []);

    if (!data) {
        return <div>Loading...</div>
      }

  return (
    <div className='heading-profile'>
           <img className='image-profile' src={data?.data.user.avatar} alt={data?.data.user.id} />
        <h1>{data?.data.user.username}</h1>   
  </div>
  )
}

export default UserProfile