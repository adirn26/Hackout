import data from '../data.json'
import {Link} from 'react-router-dom'
function WorkshopCard() {
    const Card = data.WorkshopCard

    return (
        Card.map((record,i)=> 
        <div class="container" style={{alignItems:"center", justifyContent:"center",display:"flex",marginLeft:"10px",flex:"flexwrap",float:"left"}}key={i}>
        <div class="card" style={{height:"500px", width:"250px", border:"2",borderSize:"5px",boxShadow:"15px",borderStyle:"solid",borderColor:"black",backgroundColor:"#d4e2f1",margin:"20px"}}>
        <div class="card-header">
 <img style={{width:"250px",height:"150px"}}src={record.icon} alt={record.title} />
</div>
<div class="card-body" style={{padding:"20px"}}>
   <center>

<h4 > {record.heading}</h4>
<p style={{textAlign:"left"}}>{record.description}</p>
   
 <br/>
 <a href={record.link}><button class="button-37" role="button"  style={{backgroundColor:"#162432",color:"white",padding:"10px"}}>Explore now!</button></a>
 </center>
   </div>
</div>    
   </div>)
        )
}
     
  export default WorkshopCard