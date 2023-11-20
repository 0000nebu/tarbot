import React from 'react'
import './InstructionsPage.css'
import login from '../../assets/login.png'
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);


function InstructionsPage() {

  return (
    <div className='text-instrusctions'>

      <img src={login} alt="login-image-home" />
     <p>Hey Tarot Squaaaad! ✨ Ever wondered how those mystical tarot readings zip through your past, present, and future? Buckle up, because we're about to spill the tea on this magical mystery!

First up, let's dive into the past. </p> 
<div className='cards-past-present-future'>
<img  className='cards up' src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="past" />
<img className='cards up' src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="past" />
<img className='cards up' src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="past" />
</div>

<div className='text-past-present-future'>
<p>🕰️ The past pull is like swiping through the gallery of your life. The card spills the deets on what you've already lived through. It's like digging into that ancient photo album, revealing the tales of your journey that got you here.

Now, onto the present vibes. </p>

<p>🎉 This draw is your current Netflix episode—what's airing in your life right now. The card whispers about the energy buzzing around you at this very moment. It's like a sneak peek into the blockbuster of your existence.

And drumroll, please... the future reveal!</p>

<p>🚀 This one's like a movie trailer for your destiny. The card spills hints about what's coming your way, giving you a backstage pass to the upcoming attractions in your life.

Oh, but wait—cue the guiding card! </p>

</div>

<div className= 'guidecard-explanation'>
<img className='cards up' src="https://res.cloudinary.com/dtuski5bi/image/upload/v1698856556/tarbot/wblpxa9qzdi7edshzv3x.png" alt="past" />
<p>🌈 This bad boy is like your GPS through the cosmic highway. It's the North Star guiding you, a trusty sidekick helping you navigate the twists and turns of your journey.</p>



</div>
<p>So there you have it, Tarot Squaaaad! Past, present, future, and the guiding card—a magical combo unlocking the secrets of your cosmic adventure. Ready for the ride? 🔮✨
</p>
<Link to="/reading-type">
            <button className="button home-button">i'm ready</button>
          </Link>
 </div>
  )
}

export default InstructionsPage