import React from 'react'
import data from '../data.json'
import '../styles/HomePage.css'
import HackathonCard from './HackathonCard'

function HomePage() {
  return (
    <>
    <div style={{backgroundColor:"#00263d" , height:"540px",width:"100vw"}}>
    <img align="right" src="startup.jpg" style={{marginTop:"4%",height:"450px"}}/>
     <h1 style={{color:"whitesmoke",fontSize:"38px",paddingTop:"50px", paddingLeft:"60px", width:"60%",textAlign:"left"}} >
     If you dare to dream, We can help you make it happen!
     </h1><br/>
     
              
     <p style={{color:"whitesmoke",fontSize:"20px",paddingTop:"30px", paddingLeft:"70px", width:"50%",lineHeight:"35px",textAlign:"left"}}>
     CrossThreads is a platform for entreupreneurs across the world to connect, network and build on their startup ideas. We provide you with 
        guidance to build your startups, connect you to investors and capitalists as well as have an option for crowdfunding. We also conduct workshops 
        that'll take your business to the next level. Come join us and make your startup one in a million!
     </p>
     <br/><br/><br/><br/>
     <h1>Some of the highest funded startups</h1>
     <br/>
    
     
     <HackathonCard/>
     <br/><br/> 
  
</div>

   </>

  )
}

export default HomePage