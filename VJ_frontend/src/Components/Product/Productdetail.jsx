import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import img from "../../img/aa.png";
import { alphanumeric, onlynumeric, tostmsg } from "../../MIS/Global";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Productdetailslider from "./Productdetailslider";
import { enquirydata, Getproductdata } from "../../API/Product/Product";
import { useTheme } from "@emotion/react";
import { Title } from "@mui/icons-material";
import { useRef } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AlertMessageComp from "../AlertMessageCom/AlertMessageComp";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import SignInComp from "../SignIn/SignInComp";
import SignInModel from "../SignIn/SignInModel";
import { Enquiryinsert } from "../../API/Enquiry/Enquiry";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
 };
 
function Productdetail() {
  const handleClose = () => setModelOpen(false);
  const [descript, setDescript] = useState("");
  const [mobileno, setMobileno] = useState(0);
  const [clientname, setClientname] = useState("");
  const [modelOpen, setModelOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [pricedetail, setPricedetail] = useState([]);
  const [prodid, setProdid] = useState(0);
  const [offerdetail, SetOfferdetail] = useState([]);
  const [alertdata, setAlertdata] = React.useState({});
  const [alertopen, setAlertopen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mob_ip = useRef("")
  const pass_ip = useRef("")
  let tabledata = [];
  let { logindata, setLogindata } = useContext(UserContext);
   const [ismodal, setIsmodal] = useState(false)
   const [imgdata, setImgdata] = useState([])
  // alert(JSON.stringify(logindata))
  let enquirydata = {
    logid:logindata?.logid,
    descr:descript,
    edate:new Date(),
    pdetail:[{
      prodid:prodid,
      imgurl:imgdata[0]?.imgpath,
    }]
  };
  const handleModelOpen = () =>{
    if(logindata.length<=0)
    {
      setIsmodal(false)
      setModelOpen(true);
      // navigate("/enquirysignin", { replace: false })
    }
    else
    {
      setIsmodal(true)
      setModelOpen(true);
    }
    
  } 
    const getData = async (data) => {
    tabledata = await Getproductdata(data);
    // alert(JSON.stringify(tabledata))
    setData(tabledata.data[0]);
    setProdid(tabledata.data[0].prodid);
    setImgdata(JSON.parse(tabledata.data[0].imgdata));
    setPricedetail(JSON.parse(tabledata.data[0].pricedetail));
    // alert(JSON.stringify(tabledata.data[0].offer))
    SetOfferdetail(JSON.parse(tabledata.data[0].offer));
  };
  
  const setfocus=(id)=>{
    switch (id) {
    
      case "mob":
       mob_ip.current.focus();
      break;
      case "passwd":
        pass_ip.current.focus();
      default :
        break;
    }
      }
  let from = location?.state;
  let { id } = useParams();
  useEffect(() => {
    // alert(id)
    let res = from;
    // alert(JSON.stringify(res));
    if (res) {
      res = from.from;
      if (res.toString().length > 0) {
        getData(res);
      }
      
    }
    else{
      if(id.length>0){
        getData({prodid:id})
      }
    }
  }, []);
  function loadScript (src){
    return new Promise((resolve)=>{
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  async function displayRazorpay (){
    // alert(JSON.stringify(pricedetail))

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
      alert('You are Offline... Failed to load Razorpay SDK')
      return
    }
  
  var options={
    key:'rzp_test_CtBzpHSTWFI14H',
    current:"INR",
    amount:10000*100,
    name:"Vaishanavii Jewellery",
    description:"Thanks for purchasing",
    // image:''
    handler:function(response){
      alert(response.razorpay_payment_id)
      alert("Payment Succesfully")
    },
    prefill:{
      name:"Vaishnavii Jewellery" 
    }
  };
  const paymentObject= new window.Razorpay(options)
  paymentObject.open()
}
  return (
    <div>
       <AlertMessageComp
    type={alertdata.type}
    msg={alertdata.msg}
    vertical={alertdata.vertical}
    horizontal={alertdata.horizontal}
    setOpen={setAlertopen}
    open={alertopen}
  />
      <Grid container spacing={2} style={{padding:25}}>
        <Grid item xs={12} md={6}>
          {/* <img src={img} alt="" style={{ height:"70%", width:"50%",  objectFit:"contain", backgroundRepeat:"no-repeat", margin:"30px",justifyItems:"center"}} /> */}
          <Productdetailslider prodid={from?.from.prodid} />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "auto",
            marginTop: "70px",
            alignItems: "start",
          }}
        >
          <h1>{data?.title}</h1>
          <div
            style={{ height: "2px", background: "grey", width: "100%" }}
          ></div>
          <span
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Description:
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              margin: "10px",
            }}
          >
            {data?.decr}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Price Details:
          </span>

          {pricedetail?.map((element, index) => {
            return (
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginLeft: "30px",
                  margin: "5px",
                }}
              >
                {element.fromwt}
                {element.fromunit} - {element.towt}
                {element.tounit} &#40; &#x20B9;{Number(element.fromprice).toFixed(2)}- &#x20B9;
                {Number(element.toprice).toFixed(2)}&#41;
              </div>
            );
          })}
          <span
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Available Offers:
          </span>

          {offerdetail?.map((element, index) => {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <LocalOfferIcon style={{ color: "green" }} />
                </div>
                <div>
                  <span
                    style={{
                      display: "flex",
                      fontStyle: "italic",
                      alignItems: "center",
                      marginLeft: "5px",
                    }}
                  >
                    {element.offer}
                  </span>
                </div>
              </div>
            );
          })}

          <Button
            className="btn"
            variant="outlined"
            onClick={handleModelOpen}
            style={{
              border: "1px solid darkred",
              color: "white",
              backgroundColor: "brown",
              textAlign: "center",
              width: "40%",
              margin: "auto",
              marginTop:"5px"
            }}
          >
            Enquiry
          </Button>
          <Button
            className="btn"
            variant="outlined"
            onClick={()=>displayRazorpay(pricedetail)}      
            style={{
              border: "1px solid darkred",
              color: "white",
              backgroundColor: "brown",
              textAlign: "center",
              width: "40%",
              margin: "auto",
              marginTop:"5px"
            }}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={modelOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          ismodal==true ? 
          <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <CloseIcon onClick={handleClose} style={{ float: "right" }} />
            <h3 style={{ paddingBottom: "10px" }}> Enquiry</h3>
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} sm={12}>
                <TextField
                  size="small"
                  id="outlined-case no-input"
                  value={logindata?.uname}
                  fullWidth
                  label="Name"
                  inputProps={{ maxLength: 50 ,readOnly:true}}
                  onChange={async (e) => {
                    let retdt = await alphanumeric(e);
                    setClientname(retdt);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12} sm={12}>
                <TextField
                  size="small"
                  id="outlined-case no-input"
                  fullWidth
                  value={logindata?.mob}
                  label="Mobile No"
                  inputProps={{ maxLength: 10, readOnly:true }}
                  onChange={async (e) => {
                    let retdt = await onlynumeric(e);
                    setMobileno(retdt);
                  }}
                />
              </Grid>
              <Grid item md={12} xs={12} sm={12}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Description"
                  style={{ width: "100%" }}
                  id="outlined-case no-input"
                  value={descript}
                  fullWidth
                  label="Description"
                  // inputProps={{ maxLength: 50 }}
                  onChange={async (e) => {
                    let retdt = await alphanumeric(e);
                    setDescript(retdt);
                  }}
                />
              </Grid>

              <Grid item md={12} xs={12} sm={12}>
                <Button
                  className="btn"
                  variant="outlined"
                  style={{ float: "right",
                  border: "1px solid darkred",
                  color: "white",
                  backgroundColor: "brown",
                  textAlign: "center",
                  // width: "40%",
                  margin: "auto", }}
                  onClick={() => {
                    (async () => {
                      try {
                        const profile = await Enquiryinsert(enquirydata);
                        // validate();
                        alert(JSON.stringify(enquirydata));
                        let rettostmsg = tostmsg(profile);
                        setAlertdata(rettostmsg);
                        setAlertopen(rettostmsg.open);
                        if(profile.code==100){
                            setfocus(rettostmsg.focus);
                        }
                        if(profile.code==200){
                          setDescript("")
                          handleClose()
                          
                      }

                        //handleSave(profile);
                      //   setNewprofilevehical(Number(newprofilevehical + 1));
                      } catch (e) {}
                    })();
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Typography>
        </Box>
          :<SignInModel handleClose={handleClose}/>
        }
          
        
      </Modal>

    </div>
  );
}

export default Productdetail;
