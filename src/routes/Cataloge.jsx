import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/catogry.css"
import hair from "../imges/hair.jpeg"
import nail from "../imges/nail.jpg"
import hairsabga from "../imges/hairsabga.jpg"
import mackup from "../imges/mackup.jpeg"

import proteen from "../imges/proteen.jpeg"
function Cataloge() {
  return (
    <>
    <div id='services'>
       <Link to="../pages/hair"> <div id='hair' className='card'>
            <h1>Hair</h1>
            <img className='img' src={hair} alt=''/>
        </div></Link>

        <Link to="../pages/Nail"> <div id='Nail' className='card'>
            <h1>Nail</h1>
            <img className='img' src={nail} alt=''/>
        </div></Link>

        <Link to="../pages/Makeup"> <div id='Makeup' className='card'>
            <h1>Make up</h1>
            <img className='img' src={mackup} alt=''/>
        </div></Link>

        <Link to="../pages/Sabga"> <div id='Sabga' className='card'>
            <h1>Hair Dye</h1>
            <img className='img' src={hairsabga} alt=''/>
        </div></Link>

        <Link to="../pages/Proteen"> <div id='Proteen' className='card'>
            <h1>Hair protein</h1>
            <img className='img' src={proteen} alt=''/>
        </div></Link>
         
        

        </div></>
  )
}

export default Cataloge