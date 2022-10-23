import React from 'react'
import './Partners.css'

export default function Partners({logoArray}) {
  return (
    <section className='partners'>
    <h1 className='partners__title'>НАШИ ПАРТНЁРЫ</h1>
    <div className='partners__container'>
      {logoArray.map((arr, i) => 
        <div className='partners__block' key={i}>
        <img className='partners__image' src={arr.img} alt={arr.alt}/>
      </div>
      )}
    </div>
  </section>
  )
}
