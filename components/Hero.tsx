import React from 'react'
import { Spotlight } from './ui/Spotlight'


const hero = () => {
  return (
    <div className="pb-20 pt-26">

      <div>
        {/* Full screen white spotlight - improved positioning and subtle visibility */}
<Spotlight 
  className="fixed -top-40 left-1/2 md:-top-20 
            h-[200vh] w-[200vw] 
            opacity-[0.15] 
            transform -translate-x-1/2
            blur-3xl
            transition-opacity duration-1000" 
  fill="blue"
/>

{/* Blue spotlight with smoother movement */}
<Spotlight 
  className="fixed -top-10 right-0 
            h-[170vh] w-[120vw] 
            opacity-30
            transform translate-x-1/2
            animate-spotlight-blue
            blur-2xl
            mix-blend-soft-light" 
  fill="rgba(59, 130, 246, 0.9)"  // Using rgba for better color control
/>

{/* Purple spotlight with subtle pulse */}
{/* <Spotlight 
  className="fixed top-0 right-0 
            h-[140vh] w-[90vw] 
            opacity-25
            transform translate-x-1/3
            animate-spotlight-pulse
            blur-xl
            mix-blend-multiply" 
  fill="rgba(147, 51, 234, 0.7)"  // Using rgba for better color control
/> */}
</div>

    </div>
  )
}

export default hero
