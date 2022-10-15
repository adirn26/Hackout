import React, { useState } from "react";
function GetFunding() {
  const [fullname, setFullname] = useState("");
  const [domain, setDomain] = useState("");
  const [funds, setFunds] = useState("");
  const [raised, setRaised] = useState("");
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  function handleSubmit() {
    alert("Form submit successfully")
  }
  return (
    <>
    <br/><br/><br/>
    <div align="center" style={{alignItems:"center"}}>
   
      <form style={{backgroundColor:"pink",width:"550px",borderStyle:"solid",alignSelf:"center",height:"400px"}}onSubmit={handleSubmit} >
      <h2 align="center" style={{ }}>Register your StartUp</h2>
      <br/><br/>
        <label style={{float:"left", marginLeft:"50px"}}>StartUp Name:
          <input
            type="text"
            name="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          /> 
        </label>
        <br/><br/>
        <label style={{float:"left", marginLeft:"50px"}}> Domain:
          <input
            type="name"
            name="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />
        </label>
        <br/><br/>
        <label style={{float:"left", marginLeft:"50px"}}> Percentage of funds recieved:
          <input
            type="number"
            name="funds"
            value={funds}
            onChange={(e) => setFunds(e.target.value)}
            required
          />
        </label >
        <br/><br/>
        <label style={{float:"left", marginLeft:"50px"}}>Amount raised:
          <input
            type="number"
            name="raised"
            value={raised}
            onChange={(e) => setRaised(e.target.value)}
            required
          />
        </label>
        <br/><br/>
        <label style={{float:"left", marginLeft:"50px"}}>Add Image of StartUp:
            <input type="file" onChange={handleChange} />
            <img src={file} />
            </label>

        <br/><br/>
        <input type="submit" value="Submit" style={{float:"left", marginLeft:"50px",backgroundColor:"white",height:"30px",width:"60px",borderRadius:"10px"}}/>
      </form>
      </div>
    </>
  );
}
export default GetFunding;
