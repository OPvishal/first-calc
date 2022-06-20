import React, { Component } from 'react'
import './nav.css'
import { BrowserRouter,Routes,Route,Link, } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <>
        <div style={{}}>
          <ul style={{listStyle:"none",display:"flex",justifyContent:"space-evenly",height:"7vh",minHeight:"35px",background:"cyan",alignItems:"center",fontWeight:"bold",marginTop:0}}>
            <li className='li'>Dashboard</li>
            <li className='li'><Link style={{textDecoration:"none",color:"inherit"}} to="/">About</Link></li>
            <li className='li'><Link style={{textDecoration:"none",color:"inherit"}} to="/bio">Bio</Link></li>
            <li className='li'><Link style={{textDecoration:"none",color:"inherit"}} to="/mission">Mission</Link></li>
            <li className='li'>Extra</li>
            <li className='li'>Support</li>
         </ul>
        </div>
      
      </>
    )
  }
}
