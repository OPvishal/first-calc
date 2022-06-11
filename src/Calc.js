import React, { Component } from 'react'
import Draggable from 'react-draggable';
import './calc.css'

export default class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={ 
      val1:"",
      val2:"",
      temp_input:"",
      input_color:"",
      btn:"profile",
     }
  }


  componentDidMount(){ //first time only when page gets load
    console.log("mount ran")
  }

  componentDidUpdate(prevProps,prevState){// when any props or state get changed


      if(prevState.temp_input != this.state.temp_input)
      {
        if(this.state.val1=="")
        {
          
          if(this.state.temp_input.includes("+"))
          {
            console.log("jhfjehf",this.state.temp_input.toString().split("+")[0]*1)
            this.setState({val1:this.state.temp_input.toString().split("+")[0]*1})
          }
        }
      }
    
      if( prevState.temp_input != this.state.temp_input)
      {
        // console.log("abc::",this.state.temp_input.toString().split("+")[1].split("=")[0]*1)
        // console.log("this.state.temp_input::",this.state.temp_input)
        if(this.state.temp_input.toString().includes("=")){  
          console.log("this.state.temp_input::",this.state.temp_input)
          this.setState({temp_input:this.addition(this.state.val1,this.state.temp_input.toString().split("+")[1].split("=")[0]*1)})
        }
      }
  }
  
  btn_values=[["Inv","sin","ln","7","8","9","/"],["pie","cos","log",4,5,6,"x"],["e","tan","sq.rt",1,2,3,"-"],["Ans","order","x**y",0,".","=","+"]]

  decideValues=(c)=>{
    this.setState({temp_input:c.target.value})
  }

  detectBtn=(id_parent,id_child,btn_values)=>{

    this.setState({temp_input:this.state.temp_input.toString()+btn_values})

        
    
    // if(id_parent==3 && id_child==6 )
    // {
    //   this.setState({val1:this.state.temp_input.toString().split("+")[0]*1})
    // }
    // if(id_parent==3 && id_child==5 )
    // {
    //   this.setState({val2:this.state.temp_input.toString().split("+")[1].split("=")[0]*1})
      
    //   this.setState({temp_input:this.addition(this.state.val1,this.state.temp_input.toString().split("+")[1].split("=")[0]*1)})
    // }
  
  }

  addition=(val1,val2,)=>
  {
    console.log("addition::",val1,val2)
    return val1+val2
  
  }

  render() {
    return (
      <div style={{width:"100vw",height:"100vh",background:"#202124",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Draggable>
          <div style={{display:"flex",justifyContent:"center",}}>

          {console.log("val1:",this.state.val1)}
          {console.log("val2:",this.state.val2)}
          {console.log("temp_input:",this.state.temp_input)}

          <div style={{width:"52vw",height:"fit-content",minWidth:"550px"}}>

            <div style={{resize:"none",height:"20%",width:"100%",margin:0,marginBottom:"15px",height:"12vh",border:"1px solid #bdc1c6",borderRadius:"6px",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"end",background:this.state.input_color}}>
              <input value={this.state.temp_input} onChange={(change)=>{this.decideValues(change)}} 
                style={{resize:"none",width:this.state.temp_input.length*7.5,height:"50%",background:"inherit",borderRadius:"6px",color:"#fff",border:0,outline:0} }  />
            </div>
            <div style={{height:"80%",}}>

             

              <div  className='btns_rows'>

                <div className='cstm_btns_container' >
                  <button className='cstm_btns'>Rad</button>
                  <div style={{width:0,height:"50%",borderRight:"0.5px solid white",borderRadius:"0.2px"}}></div>
                  <button className='cstm_btns'>Deg</button>
                </div>

                <button  onClick={()=>{}} className="regular_btns">
                    {"x!"}
                </button>
                <button  onClick={()=>{}} className="regular_btns">
                    {"("}
                </button>
                <button  onClick={()=>{}} className="regular_btns">
                    {")"}
                </button>
                <button  onClick={()=>{}} className="regular_btns">
                    {"%"}
                </button>
                <button onClick={()=>{}} className="regular_btns">
                    {"A/C"}
                </button>

              </div>
              
              {
                this.btn_values.map((hori_list,index)=>
                  <div className='btns_rows'>
                  {
                    hori_list.map((btn,btn_i)=>
                    <button onClick={()=>{this.detectBtn(index,btn_i,btn)}} className="regular_btns">
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
        </Draggable>
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


{/* <div style={[{},{}]}></div> */}