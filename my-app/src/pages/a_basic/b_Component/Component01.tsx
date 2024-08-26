import React from 'react'
import puppy01 from '../../../assets/dog01.jpg'

export function Img() {
  return(
    <div>
      <img src={puppy01} alt="강아지" width={300} />
    </div>
  )
}

export default function Component01() {
  return (
    <div>
      <img src={puppy01} alt="강아지" width ={100}></img>
      
      <Img/> 
      <Img/> 
    </div>

  )
}
