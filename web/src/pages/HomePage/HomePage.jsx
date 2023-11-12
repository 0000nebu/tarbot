import React from 'react'
import homeImage from '../../assets/copas.png'
import title from  '../../assets/name.png'
import './HomePage.css'

function HomePage() {
  return (
  
  <>
  <span clasName='items'>
    <img className="copas" src={homeImage} alt="home-image" />
    

    
    <img className="title" src={title} alt="title-image" />

    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta velit in diam elementum facilisis. Donec varius dolor velit, eget efficitur dolor congue dictum. Vivamus eget mattis velit. Fusce iaculis, tortor quis tincidunt hendrerit, tellus lectus consequat purus, a tincidunt ligula justo vitae ex. Vivamus ac feugiat quam. Suspendisse pharetra vestibulum mi quis iaculis. In vel dolor pharetra, posuere ante ut, euismod turpis.</p>
    
    <div class="wrap">
  <button className="button">Login</button>
  <button className="button">Sign Up</button>
</div>
    </span>
    </>
    
  
  )
}

export default HomePage