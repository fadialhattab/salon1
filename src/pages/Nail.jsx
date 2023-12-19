import React from 'react'
import n from "../imges/nail.jpg"
import n1 from "../imges/nail1.jpg"
import n2 from "../imges/nail2.jpeg"
import n4 from "../imges/nail4.jpg"
import n5 from "../imges/nail5.jpg"

function Nail() {
  return (
    <>
    <div  className='card2'>
    <img className='img' src={n} alt=''/>
      <h1>The fashion Salon </h1>
      <h1>Price=23 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={n1} alt=''/>
      <h1>The queen Salon </h1>
      <h1>Price=18 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={n2} alt=''/>
      <h1>New life Salon </h1>
      <h1>Price=15 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={n4} alt=''/>
      <h1>Tom&jerry Salon </h1>
      <h1>Price=7 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={n5} alt=''/>
      <h1>Rosete Salon </h1>
      <h1>Price=10 jd</h1>
      <h1></h1>
    </div>
</>
  )
}

export default Nail