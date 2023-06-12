import React from 'react'

const Tombol = (props) => {
  return (

    <button style = {
        props.style
    } 
    onClick={props.handleClick}>{props.children}</button>
  )
}

export default Tombol