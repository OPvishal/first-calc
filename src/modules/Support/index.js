import React, { Component } from 'react'
import './sup.css'

export default class Sup extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: ""
    }
  }

  render() {
    return (
        <>
          {/* <div style={{border:"1px solid red"}}>
            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-evenly",height:"7vh",minHeight:"35px",background:"cyan",alignItems:"center",fontWeight:"bold",marginTop:0}}>
              <li className='li'>Dashboard</li>
              <li className='li'>About</li>
              <li className='li'>Bio</li>
              <li className='li'>Mission</li>
              <li className='li'>Extra</li>
              <li className='li'>Support</li>
           </ul>
          </div> */}

          <div id = "MainBody" style = {{display:"flex"}}>
            <div id = "Content" style = {{width:"75%"}}>
                <div id = "Header">
                    Contact Us
                </div>
                <div id = "Para">
                    Email - <a href = "mailto:this.is.an.example@sampledomain.com">this.is.an.example@sampledomain.com</a>
                    Phone Number - 9876543210
                </div>
                <div id = "Contact Form">
                  Enter Name: <input />
                  Gender:
                  <div className = "gender-form">
                    <label>
                      <input type = "radio" name = "gender" value = "male" checked = {this.state.selectedOption === "male"} />
                      Male
                    </label>
                  </div>
                  <div className = "gender-form">
                    <label>
                      <input type = "radio" name = "gender" value = "female" checked = {this.state.selectedOption === "female"} />
                      Female
                    </label>
                  </div>
                  <div className = "gender-form">
                    <label>
                      <input type = "radio" name = "gender" value = "custom" checked = {this.state.selectedOption === "custom"} />
                      Custom
                    </label>
                  </div>
                  <div className = "gender-form">
                    <label>
                      <input type = "radio" name = "gender" value = "prefer-not-to-say" checked = {this.state.selectedOption === "prefer-not-to-say"} />
                      Prefer Not to Say
                    </label>
                  </div>
                  Query = <input />
                  <button> Submit </button>
                </div>
            </div>
            {/* <div id = "Sidebar" style = {{width:"25%"}}>
                <ul style={{listStyle:"none",display:"flex",alignItems:"space-evenly",justifyContent:"center",fontWeight:"bold"}}>
                    <li className='li'>Dashboard</li>
                    <li className='li'>About</li>
                    <li className='li'>Bio</li>
                    <li className='li'>Mission</li>
                    <li className='li'>Extra</li>
                    <li className='li'>Support</li>
                </ul>
            </div> */}
          </div>
        
        </>
      )
  }
}