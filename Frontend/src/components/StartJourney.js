import React from 'react'
import data from '../data.json'

function Card() {
    const Card = data.StartJourney
      return (
        
        Card.map((record,i)=> 
        <div>
          <pre><h1 style={{alignSelf:"center"}}>   </h1></pre>
          <div classnmae="parent" style={{marginLeft:"15px",alignItems:"center", display:"flex",flex:"flexwrap",float:"left"}}>
          <div classname="container" style={{height:"300px", width:"220px",marginLeft:"20px",padding:"10px",paddingTop:"15px",boxShadow:"5px",borderRadius:"10px",alignItems:"center",border:"2px",backgroundColor:"pink"}}>
          <img src={record.icon} alt={record.title} style={{height:"60px",width:"60px"}}/>
          <br/> 
          <h2 >{record.title}</h2>
          <p>{record.content}</p>
          </div>
              
          </div>
          </div>
        
      )
      )
    }

    function StartJourney()
    {
        return(
            <div style={{backgroundColor:"white",height:"590px"}}>
           <br/> <h1 style={{marginBottom:"-90px"}}>Stages in your Startup Journey...</h1>
            <Card/>
            
            </div>
        )
    }

export default StartJourney