import React from 'react'
import p from "../imges/protein.jpeg"
import p1 from "../imges/protein1.jpg"
import p2 from "../imges/proteen.jpeg"
import p3 from "../imges/protein3.jpg"
import p4 from "../imges/protein4.jpeg"
function Proteen() {
  return (
    <>
    <div  className='card2'>
    <img className='img' src={p} alt=''/>
      <h1>Tom&jerry Salon</h1>
      <h1>Price=50 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={p1} alt=''/>
      <h1>The fashion Salon </h1>
      <h1>Price=60 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={p2} alt=''/>
      <h1>The queen Salon </h1>
      <h1>Price=55 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={p3} alt=''/>
      <h1>New life Salon </h1>
      <h1>Price=50 jd</h1>
      <h1></h1>
    </div>

    <div  className='card2'>
    <img className='img' src={p4} alt=''/>
      <h1>Rosete Salon </h1>
      <h1>Price=70 jd</h1>
      <h1></h1>
    </div>
</>
  )
}

export default Proteen