import React from 'react'
import '../styles/Navbar.css'
export default class Navbar extends React.Component {
    
      render() {
        return (
        <div style={{position:"static", backgroundColor:"white",height:"20px",width:"100vw"}}><h3 style={{textAlign:"left",marginLeft:"60px",marginTop:"10px",marginBottom:"20px"}}>CrossThreads</h3>
            <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            
        
            <ul class="menu__box">
            <li><a class="menu__item" href="http://localhost:3000/login">Login</a></li>
            <li><a class="menu__item" href="http://localhost:3000/signup">SignUp</a></li>
              <li><a class="menu__item" href="http://localhost:3000/home">Home</a></li>
              <li><a class="menu__item" href="http://localhost:3000/startjourney">Start your Journey</a></li>
              <li><a class="menu__item" href="http://localhost:3000/getfunding">Get Funding</a></li>
              <li><a class="menu__item" href="http://localhost:3000/networking">Networking</a></li>
              <li><a class="menu__item" href="http://localhost:3000/workshop">Workshops</a></li>
              <li><a class="menu__item" href="http://localhost:3000/fundstartup">Fund StartUp</a></li>
            </ul>
          </div>
</div>
        );
      }
    }


