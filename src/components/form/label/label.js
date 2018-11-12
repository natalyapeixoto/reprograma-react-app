import React from 'react'
import './label.css'

function Label(props){

  return (
    <label className='label' htmlFor={props.htmlFor} id={props.id}>
        {props.children}
    </label>
  )

}

export default Label