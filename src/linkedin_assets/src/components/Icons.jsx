import React from 'react'

function Icons({icon, text}) {
  return (
    <div style = {{textAlign:"center"}}>
      {icon}
      <div style = {{fontSize:"14px"}}>{text}</div>
    </div>
  )
}

export default Icons
