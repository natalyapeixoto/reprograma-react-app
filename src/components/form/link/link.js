import React from 'react'
import './link.css'

function Link(props){
  return (
    <a href={props.href} className='link'>{props.children}</a>
  )
}

export default Link