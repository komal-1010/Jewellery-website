import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/Jwellary/132423_gold-chain-light-weight-gold-necklace-sets-with.png";
import { Category, Translate } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Getcategorydata } from "../../API/Category/Category";
import { useEffect } from "react";
import { IMG_URL } from "../../MIS/Global";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Base from "../../CSS/Base.css";
import { Getproductdata } from "../../API/Product/Product";
import Globalproduct from "../GlobalProduct/Globalproduct";
import Productcard from "../Product/Productcard";
import { render } from "@testing-library/react";
import Banner from "../Banner/Banner";
import { useContext } from "react";
import { UserContext } from "../Product/UserContext";
let tabledata = [];

const Newforyou = () => {
  const navigate = useNavigate();
  const navigateTocategory = () => {
    navigate("/category");
  };
  const [data, setData] = useState([]);
  const [dataProd, setDataProd] = useState([]);
  const getData = async (data) => {
    tabledata = await Getproductdata(data);
    // alert(JSON.stringify(tabledata))
    setData(tabledata);
  };

  useEffect(() => {
    let customwhere =
      " and (productmaster.flag like '%new%' or productmaster.flag like '%trending%')";
    customwhere += " order by productmaster.flag asc limit 14";
    getData({ customwhr: customwhere });
  }, []);

  let newdata = data?.data?.filter((element,index) => {
    return element.flag.toLowerCase().includes("new")  ;
  });
  newdata=newdata?.slice(0,4);

  let trendingdata = data?.data?.filter((element,index) => {
    return element.flag.toLowerCase().includes("trending") ;
  });
  trendingdata=trendingdata?.slice(0,4);

  const { bannerdata } = useContext(UserContext);
  const [imglink, setImglink] = useState("")
  const [imglink1, setImglink1] = useState("")
  let img=""; 
  setTimeout(() => {
    img = JSON.parse(bannerdata?.data[2]?.imgdata);
    setImglink(IMG_URL + img[0].imglink);  
    img = JSON.parse(bannerdata?.data[3]?.imgdata);
    setImglink1(IMG_URL + img[0].imglink);
   }, 0);

  const GetHeading = ({ index }) => {
    let heading = "New For You";
    let whrheading="New";
    if (index > 0) {
      heading = "Trending Products";
      whrheading="Trending"
    }
    return (
      <>
      <Grid
        item
        sx={12}
        md={12}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "15px",
          marginTop: "15px",
        }}
      >
        <span
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            margin: "10px",
            color: "darkred",
          }}
        >
          {heading}
        </span>
        <span style={{ fontSize: "15px", margin: "10px" }}>
          Browse through your favourite categories. We've got them all!
        </span>
        <div
          style={{ height: "2px", background: "black", width: "100%" }}
        ></div>
        <div style={{marginTop:10,display:"flex",justifyContent:"flex-end",alignItems:"end",width:"100%"}} > 
        
         <Link 
         state={{
          from: { flag: whrheading },
        }}
        style={{ textDecoration: "none", color: "black" }}
         to="./Product" ><Button className="btn"style={{color:"black",borderColor:"black"}} variant="outlined">View All</Button>
         </Link>
        </div>

      </Grid>
          </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          width: "90vw",      
          // boxShadow: "1px 3px 4px 2px rgba(0, 0, 0, 0.3)",
          // paddingRight:5,
          // paddingLeft:3
        }}
      >
        
         {newdata?.map((element, index) => {
          return (
            <>
              {index == 0 ? <GetHeading index={0} /> : ""}

              <Grid item md={3} sx={{ position: "relative", }}>
                <Productcard data={element} />
              </Grid>
            </>
          );
        })}

        {/* ; <Banner imgurl={imglink}/> */}
        <Grid
        item
        sx={12}
        md={12}>
        <Banner imgurl={imglink} />
        </Grid>
        
        {trendingdata?.map((element, index) => {
          return (
            <>
              {index == 0 ? <GetHeading index={6} /> : ""}

              <Grid item md={3} sx={{ position: "relative" }}>
                <Productcard data={element} />
              </Grid>
            </>
          );
        })}
        <Grid
        item
        sx={12}
        md={12}>
        <Banner imgurl={imglink1} />
        </Grid> 
      </Grid>
    </div>
  );
};

export default Newforyou;
