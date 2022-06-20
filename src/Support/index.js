import React, { Component } from 'react'
import './sup.css'

export default class Abt extends Component {
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

          <div id = "MainBody" style = {{display:"flex"}}>
            <div id = "Content" style = {{width:"75%"}}>
                <div id = "Header">
                    Contact Us
                </div>
                <div id = "Para">
                    
                </div>
            </div>
            <div id = "Sidebar" style = {{width:"25%"}}>
                <ul style={{listStyle:"none",display:"flex",alignItems:"space-evenly",justifyContent:"center",fontWeight:"bold"}}>
                    <li className='li'>Dashboard</li>
                    <li className='li'>About</li>
                    <li className='li'>Bio</li>
                    <li className='li'>Mission</li>
                    <li className='li'>Extra</li>
                    <li className='li'>Support</li>
                </ul>
            </div>
          </div>
        
        </>
      )
  }
}