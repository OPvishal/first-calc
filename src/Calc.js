import React, { Component } from 'react'

export default class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={ 
      val1:"",
      val2:"",
      textarea_complete:"",
     }
  }
  
  btn_values=[["Inv","sin","ln","7","8","9","/"],["pie","cos","log",4,5,6,"x"],["e","tan","sq.rt",1,2,3,"-"],["Ans","order","x**y",0,".","=","+"]]

  decideValues=(c)=>{
    this.setState({val1:c.target.value})
  }

  detectBtn=(id_parent,id_child,btn_values)=>{

    this.setState({textarea_complete:this.state.textarea_complete.toString()+btn_values})
    
    if(id_parent==3 && id_child==6 )
    {
      this.setState({val1:this.state.textarea_complete.toString().split("+")[0]*1})
    }
    if(id_parent==3 && id_child==5 )
    {
      this.setState({val2:this.state.textarea_complete.toString().split("+")[1].split("=")[0]*1})
      this.setState({textarea_complete:this.addition(this.state.val1,this.state.textarea_complete.toString().split("+")[1].split("=")[0]*1)})
    }
  }

  addition=(val1,val2,)=>
  {return val1+val2 }

  render() {
    return (
      <div style={{display:"flex",justifyContent:"center",}}>

        {console.log("val1:",this.state.val1)}
        {console.log("val2:",this.state.val2)}
        {console.log("textarea_complete:",this.state.textarea_complete)}

        <div style={{width:"50%",height:"fit-content"}}>

          <div style={{resize:"none",height:"20%",width:"100%",margin:0,marginBottom:"15px",height:"12vh",}}>
            <textarea value={this.state.textarea_complete} onChange={(change)=>{this.decideValues(change)}} style={{resize:"none",width:"99%",height:"100%",background:"#202124",borderRadius:"6px",color:"#fff"}}  />
          </div>
          <div style={{height:"80%",}}>
            
            {
              this.btn_values.map((hori_list,index)=>
                <div style={{display:"flex",height:"19%",justifyContent:"space-between",marginBottom:"7px",}}>
                 {
                   hori_list.map((btn,btn_i)=>
                   <button value={btn} onClick={()=>{this.detectBtn(index,btn_i,btn)}} style={{width:"13.5%",height:"5vh",background:"#5f6368",borderRadius:"4px",height:"6vh",border:0}}>
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

