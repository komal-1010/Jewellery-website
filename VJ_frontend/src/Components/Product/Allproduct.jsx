import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/Jwellary/4.png";
import { Category, TextFields, Translate } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Getcategorydata } from "../../API/Category/Category";
import { useEffect } from "react";
import { IMG_URL } from "../../MIS/Global";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Getproductdata } from "../../API/Product/Product";
import Productcard from "./Productcard";
import { useContext } from "react";
import { UserContext } from "./UserContext";
let tabledata = [];
const Allproduct = () => {
   
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const location = useLocation();
  let from = location?.state;
  const [productdata, setProductdata] = useState([]);
  let { search, setSearch } = useContext(UserContext);
  const getData = async (data) => {
    if(search!=""){
      let customwhere =
      ` and productmaster.title like '%${search}%' `;
      // alert(customwhere)
      tabledata = await Getproductdata({ customwhr: customwhere });
    }else{

      tabledata = await Getproductdata(data);
    }

    // alert(JSON.stringify(tabledata))
  
      setData(tabledata);
      setProductdata(tabledata);
    
  };
  const sortby = [
    { label: "NEW" },
    { label: "TRENDING" },
    { label: "REGULAR" },
    { label: "PRICE lowest to heighest" },
  ];

  
  const productsearch = (sort1) => {
    // alert(sort1)

    let searchdata = productdata.data.filter((element) => {
      return element.flag.toLowerCase().includes(sort1.toLowerCase());
    });
    let data1 = {
      data: searchdata,
    };
    setData(data1);
  };

  const getSearch = () => {
    // setData([])
    let searchdata = [];
    searchdata = productdata?.data?.filter((e) => {
      return e?.title.toLowerCase().includes(search.toLowerCase());
    });

    let data1 = {
      data: searchdata,
    };
    setData(data1);

    // setData(data1);
  };


  useEffect(() => {
    getData();
    
    let res = from;
    // alert(JSON.stringify(res));
    if (res) {
      res = from.from;
      if (res.toString().length > 0) {
        getData(res);
       
      }
    }
    // getSearch()
  }, []);
  useEffect(() => {
    getSearch();
    // setTimeout(() => {
    //   getSearch();  
    // }, 1000);
  }, [search]);
  return (
    <div
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // width:"100%"
        }
      }
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
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
              fontSize: "30px",
              fontWeight: "bold",
              margin: "10px",
              color: "darkred",
            }}
          >
            ALL PRODUCT
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            // alignItems: "center",
            // flexDirection: "column",
            justifyContent: "right",
            marginBottom: "15px",
            // paddingright:"100px"
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={sortby}
            sx={{
              width: 300,
              //  position:"absolute",
              paddingRight: 10,
            }}
            // value={sort}
            onChange={async (e, newvalue) => {
              setSort(newvalue.label);
              // let retdt=await alphanumeric(e);
              productsearch(newvalue.label.toString().replace("''", ""));
            }}
            onInputChange={(event, newInputValue) => {
              productsearch("");
            }}
            renderInput={(params) => (
              <TextField {...params} label="Filter : BEST SELLERS" />
            )}
          />

          {/* <span
            style={{ fontSize: "15px", margin: "10px" }}
          >
            Browse through your favourite categories. We've got them all!
          </span> */}
        </Grid>
        {/* <Grid item sx={1.8} md={0.9} style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly",alignItems:"center", height:"100px", width:"150px",   margin:"10px", borderRadius:"10px", backgroundColor:"pink", marginTop:"-8px"}}><Category style={{fontSize:"40px"}} onClick={navigateTocategory} />
        <span style={{fontSize:"10px", fontWeight:"bold", margin:"5px"}}>All Category</span>
        </Grid>     */}

        {data.data?.map((element) => {
          return (
            <Grid item md={2.3} sx={{}}>
              <Productcard data={element} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Allproduct;
