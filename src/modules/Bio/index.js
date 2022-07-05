import React, { Component } from 'react'
import './bio.css'

export default class Bio extends Component {

  constructor(props){
    super(props);
    this.state = {
      cont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus metus. Posuere morbi leo urna molestie at elementum eu. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Viverra adipiscing at in tellus integer feugiat. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Mattis rhoncus urna neque viverra justo nec. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Nulla aliquet porttitor lacus luctus accumsan tortor. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Lobortis elementum nibh tellus molestie nunc non blandit massa. Tortor condimentum lacinia quis vel eros donec ac. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Fusce ut placerat orci nulla. Porttitor leo a diam sollicitudin tempor id eu nisl. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet volutpat consequat mauris nunc. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Auctor eu augue ut lectus arcu bibendum. Sed tempus urna et pharetra pharetra massa massa. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nibh tortor id aliquet lectus proin. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Tincidunt ornare massa eget egestas purus. Praesent semper feugiat nibh sed pulvinar proin. Ante in nibh mauris cursus mattis molestie a iaculis at. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Aliquam vestibulum morbi blandit cursus risus. Non nisi est sit amet facilisis magna etiam tempor. Eget felis eget nunc lobortis mattis.",
      submit:false,
      questionNumber: 0
    }
  }

  onChange(){
    return this.state.cont;
  }

  render() {
    return (
        <>
          <div id = "MainBody" style = {{display:"flex"}}>
            <div id = "Content" style = {{width:"75%"}}>
                <div id = "Header">
                  Bio
                </div>
                <div id = "Para">
                  {/* {onChange()} */}
                  {this.state.submit && ("Question number" + this.state.questionNumber.toString() + ":")}
                  {this.state.cont}
                  <p></p>
                  {this.state.submit && "You have submitted your question."}
                </div>
                <div id = "Question" style = {this.state.submit?{display:"none"}:{}}>
                  <input onChange = {(change)=>{this.setState({cont:change.target.value})}} ></input>
                  <button onClick = {()=>{this.setState({submit:true, questionNumber: this.state.questionNumber + 1})}}>
                    Submit
                  </button>
                </div>
            </div>
          </div>
        </>
      )
  }
}
