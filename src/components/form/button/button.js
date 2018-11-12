import React from 'react'
import './button.css'

function Button(props){
  let classes =  'button'
  if(props.disabled){
    classes += ' button--disabled'
  }
  return(
    <button type='submit'  className={classes}>{props.children}</button>
  )
}

export default Button