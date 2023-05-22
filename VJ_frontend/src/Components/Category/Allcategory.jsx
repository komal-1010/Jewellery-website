import { Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Getcategorydata } from '../../API/Category/Category';
import bg from '../../img/jw.png'
import { IMG_URL } from '../../MIS/Global';
let tabledata=[];
function Allcategory() {
      const [data, setData] = useState([]);
  
  const getData = async () => {
    
      tabledata = await Getcategorydata();
      // alert(JSON.stringify(tabledata))
      setData(tabledata)
      
    };
  
    useEffect(() => {
      getData();
    }, []);
  return (
    <div>
        <Grid container spacing={2} sx={{backgroundColor:"whitesmoke",display:"flex",height:"100px", justifyContent:"space-evenly",alignItems:"center",marginTop:"10px",marginBottom:"20px",}}>   
        { data.data?.map((element) => {
            let img = JSON.parse(element.imgdata);
            let imglink = IMG_URL+ img[0].imglink;
return(
      <Grid item xs={3} md={1.7} sm={12} sx={{display:"flex", flexDirection:"column",borderRadius:"10px",justifyContent:"center", alignItems:"center", height:"200px",  backgroundColor:"whitesmoke"}} >
      <img src={imglink} alt="" style={{ height:"100vh", width:"70%",  objectFit:"cover", backgroundRepeat:"no-repeat", margin:"10px", borderRadius:"10px",}} />    
            <span style={{fontSize:"14px", fontWeight:"bold", margin:"8px"}}>Product Name</span>

      </Grid>)
      })}
       
    

        </Grid>

    </div>
  )
}

export default Allcategory