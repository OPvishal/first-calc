import React, { Component } from 'react'
import './mis.css'

export default class Mission extends Component {
  render() {
    return (
        <>
          <div id = "MainBody" style = {{display:"flex"}}>
            <div id = "Content" style = {{width:"75%"}}>
                <div id = "Header">
                    Mission
                </div>
                <div id = "Para">
                  Some lorem ipsum about a mission.
                </div>
            </div>
          </div>
        </>
      )
  }
}
