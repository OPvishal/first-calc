import React, { Component } from 'react'

export default class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={  }
  }
  
  btn_values=[["Inv","sin","ln","7","8","9","/"],["pie","cos","log",4,5,6,"x"]]

  render() {
    return (
      <div style={{height:"55vh",border:"1px solid red",display:"flex",justifyContent:"center"}}>

        <div style={{width:"50%",height:"100%",border:"1px solid green",}}>

          <div style={{border:"1px solid black",resize:"none",height:"20%",width:"100%",margin:0}}>
            <textarea style={{border:"1px solid black",resize:"none",width:"99%",height:"99%"}}  />
          </div>
          <div style={{height:"80%",border:"1px solid black"}}>
            fafw
            {
              this.btn_values.map((hori_list,index)=>
                <div style={{border:"1px solid brown",display:"flex"}}>
                 {
                   hori_list.map((btn,btn_i)=>
                   <button style={{border:"2px solid blue",width:"14%",}}>
                      {
                        btn
                      }
                    </button>
                   )
                 }
                </div>
              )
            }
          </div>

        </div>
        
      </div>
    )
  }
}

export class Abc extends Component {

  constructor(props){
    super(props);
    this.state={  }
  }
  

  render() {
    return (
      <div>
        abc
      </div>
    )
  }
}

