import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/Jwellary/4.png";
import { Category, Translate } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Getcategorydata } from "../../API/Category/Category";
import { useEffect } from "react";
import { IMG_URL } from "../../MIS/Global";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Hidden from '@mui/material/Hidden';

let tabledata = [];
const Cotegory = () => {
  const navigate = useNavigate();
  const navigateTocategory = () => {
    navigate("/category");
  };
  const [data, setData] = useState([]);

  const getData = async () => {
    tabledata = await Getcategorydata();
    // alert(JSON.stringify(tabledata))
    setData(tabledata);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          width: "90vw",
        }}
      >
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
            Shop By Category
          </span>
          <span style={{ fontSize: "15px", margin: "10px" }}>
            Browse through your favourite categories. We've got them all!
          </span>
          <div
            style={{ height: "2px", background: "black", width: "100%" }}
          ></div>
        </Grid>
        {/* <Grid item sx={1.8} md={0.9} style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly",alignItems:"center", height:"100px", width:"150px",   margin:"10px", borderRadius:"10px", backgroundColor:"pink", marginTop:"-8px"}}><Category style={{fontSize:"40px"}} onClick={navigateTocategory} />
        <span style={{fontSize:"10px", fontWeight:"bold", margin:"5px"}}>All Category</span>
        </Grid>     */}

        {data.data?.map((element) => {
          let img = JSON.parse(element.imgdata);
          let imglink = IMG_URL + img[0].imglink;
          return (
            <Grid
              item
              className="flipcontainer"
              xs={12}
              md={1.9}
              sm={12}
              sx={{
                margin: "5px",
                border: "1px solid lightgray",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3)",
                position: "relative",
              }}
            >
              <Link
                to="/product"
                state={{
                  from: { catgid: element.catgid },
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  <div
                    style={{
                      // backgroundColor: "pink",
                      height: "30vh",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <img
                      src={imglink}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100% ",
                        objectFit: "fill",
                        backgroundRepeat: "no-repeat",
                        margin: "10px",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      height: "12vh",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderBottomRightRadius: "5px",
                      borderBottomLeftRadius: "5px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "5px",
                        color: "darkred",
                        textTransform:"uppercase"
                      }}
                    >
                      {element.catgname}
                    </span >
                     <span className="exhidden" style={{ fontSize: "16px", margin: "5px",  }}>
                      Explore
                      <ArrowForwardIosIcon style={{ fontSize: "10px" }} />
                    </span>
                  </div>
                </div>
                <div
                  className="flipcard"
                  style={{
                    width: "auto",
                    display: "flex",
                    // element.flag == "Regular" ? "none" : "flex",
                    // alignItems: "center",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "75%",
                    backgroundColor: "red",
                    // marginLeft: 5,
                    zIndex: 999,
                    // marginTop: 00,
                    // clipPath:
                    //   "polygon(100% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%, 0 2%)",
                  }}
                >
                  <div style={{ padding: 25,display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                    <span style={{ color: "white" ,fontSize:18,textTransform:"uppercase"}}>{element.catgname}</span>
                    <button type="button" style={{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:10,background:"none",borderWidth:2,borderColor:"#FFF",textDecoration:"none",borderStyle:"solid"}}>
                    <span style={{ color: "white" ,fontSize:18,textTransform:"uppercase",borderWidth:5,borderColor:"red"}}>explore</span>
                    </button>
                  </div>
                </div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cotegory;
