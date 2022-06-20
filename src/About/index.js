import React, { Component } from 'react'
import './abt.css'

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
                    About Us
                </div>
                <div id = "Para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus metus. Posuere morbi leo urna molestie at elementum eu. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Viverra adipiscing at in tellus integer feugiat. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Mattis rhoncus urna neque viverra justo nec. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Nulla aliquet porttitor lacus luctus accumsan tortor. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Lobortis elementum nibh tellus molestie nunc non blandit massa. Tortor condimentum lacinia quis vel eros donec ac. Sit amet consectetur adipiscing elit duis tristique sollicitudin.

Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Fusce ut placerat orci nulla. Porttitor leo a diam sollicitudin tempor id eu nisl. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet volutpat consequat mauris nunc. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Auctor eu augue ut lectus arcu bibendum. Sed tempus urna et pharetra pharetra massa massa. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nibh tortor id aliquet lectus proin. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Tincidunt ornare massa eget egestas purus. Praesent semper feugiat nibh sed pulvinar proin. Ante in nibh mauris cursus mattis molestie a iaculis at. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Aliquam vestibulum morbi blandit cursus risus. Non nisi est sit amet facilisis magna etiam tempor. Eget felis eget nunc lobortis mattis.

Quam adipiscing vitae proin sagittis nisl rhoncus. Interdum posuere lorem ipsum dolor. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nunc vel risus commodo viverra maecenas accumsan. Sit amet porttitor eget dolor morbi non arcu risus. Id aliquet lectus proin nibh nisl condimentum. Cursus risus at ultrices mi. Turpis massa sed elementum tempus egestas sed sed. Nibh mauris cursus mattis molestie a iaculis. Scelerisque felis imperdiet proin fermentum leo. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.

Sit amet consectetur adipiscing elit. Nulla pellentesque dignissim enim sit amet venenatis. Ac auctor augue mauris augue neque gravida in fermentum. Orci ac auctor augue mauris. Libero volutpat sed cras ornare arcu dui. Facilisis sed odio morbi quis commodo odio aenean. Dolor morbi non arcu risus quis. Justo laoreet sit amet cursus sit amet dictum sit amet. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam.

Erat velit scelerisque in dictum non consectetur a erat. Etiam dignissim diam quis enim lobortis. Leo a diam sollicitudin tempor id. Tristique senectus et netus et malesuada. At volutpat diam ut venenatis tellus. Magna sit amet purus gravida quis blandit turpis cursus. Volutpat ac tincidunt vitae semper quis lectus nulla at. Nisi est sit amet facilisis magna. Sagittis aliquam malesuada bibendum arcu vitae. Scelerisque eleifend donec pretium vulputate sapien.
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
