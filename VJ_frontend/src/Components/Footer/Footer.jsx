import { Grid, Link } from '@mui/material'
import { margin } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imglink from "../../img/Logo.png"
function Footer() {
  return (
    <div>
     <Grid container spacing={2} sx={{backgroundColor:'#F53E64', marginTop:"20px"}}>
     <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:"column" , margin:'10px'}}> 
        <img src={imglink} alt="logo" style={{objectFit:"fill",backgroundRepeat:"no-repeat", margin:"8px", height:"30%", width:"30%" }} />
        <span style={{fontSize:"14px", fontWeight:"bold", margin:"5px 20px"}}>Copyright<span>&copy;</span> 2022</span>
       <Link to="" style={{marginTop:"15px", color:"black", textDecoration:"none", cursor:"pointer"}}
        > <span style={{fontSize:"18px", fontWeight:"bold", margin:"5px 20px"}}>Privacy Policy</span></Link>
       <Link to="" style={{marginTop:"10px", color:"black", textDecoration:"none", cursor:"pointer"}} >  <span style={{fontSize:"20px", fontWeight:"bold", margin:"5px 20px"}}>Terms and Condition</span></Link>
      
       <Grid item xs={12} md={6} sx={{display:'flex' ,}}>
       <FacebookIcon style={{fontSize:"40px", marginTop:"30px", marginLeft:"20px", color:"black"}} />
       <InstagramIcon style={{fontSize:"40px", marginTop:"30px", marginLeft:"20px", color:"black"}} />
       <LinkedInIcon style={{fontSize:"40px", marginTop:"30px", marginLeft:"20px", color:"black"}} />
       </Grid> 

      </Grid>
     <Grid item xs={12} md={5} sx={{display:'flex', flexDirection:"column" , margin:'10px'}}>
     <span style={{fontSize:"25px", fontWeight:"700", margin:"5px"}}>Address</span>
     <div style={{display:'flex',justifyContent:"start",alignItems:"center", margin:"5px"}}>
     <LocationOnIcon  /><span style={{fontSize:"18px", fontWeight:"bold",marginLeft:"10px" }}> Jagdale Residancy,Shop No.4,Near Police Station Khanbhag,Sangli</span>
     </div>
     <div style={{display:'flex',justifyContent:"start",alignItems:"center", margin:"5px"}}>
     <CallIcon  /><a href='tel:+919552589909' style={{fontSize:"18px", fontWeight:"bold", marginLeft:"10px",textDecoration:"none" ,color:"black" }}> +91-9552589909</a>
     </div>
     <div style={{display:'flex',justifyContent:"start",alignItems:"center", margin:"5px"}}>
     <EmailIcon /> <span style={{fontSize:"18px", fontWeight:"bold",marginLeft:"10px" }}> thinkup.vaishnavijewellers@gmail.com </span>
     </div>
     </Grid>

     </Grid>
    </div>
  )
}

export default Footer