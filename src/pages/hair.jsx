import React from 'react'
import { Link } from 'react-router-dom'
import t4 from "../imges/tasreha4.jpg"
import t3 from "../imges/tasreha3.jpg"
import t2 from "../imges/tasreha2.jpg"
import t5 from "../imges/tasreha5.jpeg"
import t1 from "../imges/tasreha1.jpg"
function Hair() {
  return (
    <>
    <>
    <div  className='card2'>
    <img className='img' src={t1} alt=''/>
      <h1>Rosete Salon </h1>
      <h1>Price=19 jd</h1>
      <h1></h1>
    </div> 

    <div  className='card2'>
    <img className='img' src={t3} alt=''/>
      <h1>The fashion Salon </h1>
      <h1>Price=33 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={t2} alt=''/>
      <h1>The queen  Salon </h1>
      <h1>Price=40 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={t4} alt=''/>
      <h1>New life Salon </h1>
      <h1>Price=24 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={t5} alt=''/>
      <h1>Tom&jerry Salon </h1>
      <h1>Price=20 jd</h1>
      <h1></h1>
    </div>
</>
    </>
  )
}

export default Hair