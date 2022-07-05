import React, { Component } from 'react'
import './ext.css'

export default class Ext extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: "black"
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
                  Extra
                </div>
                <div id = "Para">
                  Some random details about us.

                  Want to change the text color? Choose:
                  <div className = "color-form" style = {{color:this.state.selectedOption}}>
                    <label>
                      <input type = "radio" name = "colors" value = "black" checked = {this.state.selectedOption === "black"} />
                      Black
                    </label>
                  </div>
                  <div className = "color-form">
                    <label>
                      <input type = "radio" name = "colors" value = "red" checked = {this.state.selectedOption === "red"} />
                      Red
                    </label>
                  </div>
                  <div className = "color-form">
                    <label>
                      <input type = "radio" name = "colors" value = "green" checked = {this.state.selectedOption === "green"} />
                      Green
                    </label>
                  </div>
                  <div className = "color-form">
                    <label>
                      <input type = "radio" name = "colors" value = "blue" checked = {this.state.selectedOption === "blue"} />
                      Blue
                    </label>
                  </div>
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
