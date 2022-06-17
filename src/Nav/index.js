import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <>
        <div style={{border:"1px solid red"}}>
          <ul style={{listStyle:"none",display:"flex",justifyContent:"space-evenly",height:"7vh",minHeight:"35px",background:"cyan",alignItems:"center",fontWeight:"bold",marginTop:0}}>
            <li className='li'>Dashboard</li>
            <li className='li'>About</li>
            <li className='li'>Bio</li>
            <li className='li'>Mission</li>
            <li className='li'>Extra</li>
            <li className='li'>Support</li>
         </ul>
        </div>
      
      </>
    )
  }
}
