import React from 'react'
import batman from './img/batman.png'
import './pageNotFound.css'

function PageNotFound(){
  return (
    <div className='page-not-found'>
      <h1>Ops!</h1> 
      <img className='page-not-found__image' src={batman}></img>
    </div>
  )
}

export default PageNotFound