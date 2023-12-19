import React from 'react'
import s from "../imges/sabga.jpeg"
import s1 from "../imges/sabga1.jpeg"
import s2 from "../imges/sabga2.jpg"
import s3 from "../imges/sabga3.jpg"
import s4 from "../imges/sabga4.jpeg"
function Sabga() {
  return (
    <>
    <div  className='card2'>
    <img className='img' src={s} alt=''/>
      <h1>Rosete Salon </h1>
      <h1>Price=35 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={s1} alt=''/>
    
      <h1>The fashion Salon </h1>
      <h1>Price=25 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={s2} alt=''/>
    
      <h1>The queen Salon </h1>
      <h1>Price=10 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={s3} alt=''/>
    
      <h1>New life Salon </h1>
      <h1>Price=20 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={s4} alt=''/>
    
      <h1>Tom&jerry Salon</h1>
      <h1>Price=15 jd</h1>
      <h1></h1>
    </div>
</>
  )
}

export default Sabga