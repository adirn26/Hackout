import data from '../data.json'
import {Link} from 'react-router-dom'
function HackathonCard() {
    const Card = data.HackathonCard

    return (
        Card.map((record,i)=> 
        <div class="container" style={{alignItems:"center", justifyContent:"center",display:"flex",marginLeft:"10px",flex:"flexwrap",float:"left"}}key={i}>
        <div class="card" style={{height:"500px", width:"250px", border:"2",borderSize:"5px",boxShadow:"15px",borderStyle:"solid",borderColor:"black",backgroundColor:"#d4e2f1",margin:"20px"}}>
        <div class="card-header">
 <img style={{width:"250px",height:"150px"}}src={record.icon} alt={record.title} />
</div>
<div class="card-body" style={{padding:"20px"}}>
   <center>

<h4 > {record.title}</h4>
<p style={{textAlign:"left"}}>{record.description}</p>

   <div class="tag tag-teal" style={{backgroundColor:"#162432",borderColor:"black",color:"white",padding:"4px"}}>Domain: {record.domain}</div>
   <div><h4 ><pre>Funded:{record.funded}%   Raised:${record.raised}</pre></h4></div>
 <br/>
 <Link to="/fundstartup"><button class="button-37" role="button"  style={{backgroundColor:"#162432",color:"white",padding:"10px"}}>Fund now!</button></Link>
 </center>
   </div>
</div>    
   </div>)
        )
}
     
  export default HackathonCard