import React from 'react'
import m from "../imges/mackup.jpeg"
import m1 from "../imges/mackup1.jpg"
import m2 from "../imges/mackup2.jpeg"
import m3 from "../imges/mackup3.jpeg"
import m4 from "../imges/mackup4.jpg"
function Makeup() {
  return (
    <>
    <div  className='card2'>
    <img className='img' src={m} alt=''/>
     <h1>Rosete Salon </h1>
      <h1>Price=35 jd</h1>
      <h1></h1>
    </div> 

    <div  className='card2'>
    <img className='img' src={m1} alt=''/>
      <h1>The fashion Salon </h1>
      <h1>Price=25 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={m2} alt=''/>
      <h1>The queen Salon </h1>
      <h1>Price=30 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={m3} alt=''/>
      <h1>New life Salon </h1>
      <h1>Price=50 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={m4} alt=''/>
      <h1>Tom&jerry Salon </h1>
      <h1>Price=45 jd</h1>
      <h1></h1>
    </div>
</>
  )
}

export default Makeup