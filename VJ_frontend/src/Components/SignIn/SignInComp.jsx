import { Button, Checkbox, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import img from "../../img/slider3.jpg";
import logo from "../../img/Logo.png"
import CloseIcon from "@mui/icons-material/Close";
import "../SignIn/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import { signindata } from "../../API/Signup/Signup";
import AlertMessageComp from "../AlertMessageCom/AlertMessageComp";
import { useRef } from "react";
import { alphanumeric, tostmsg } from "../../MIS/Global";
import { useContext } from "react";
import { UserContext } from "../Product/UserContext";

function SignInComp() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [alertdata, setAlertdata] = React.useState({});
  const [alertopen, setAlertopen] = React.useState(false);
  const [mob, setMob] = useState("");
  const [passwd, setPasswd] = useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let data = {
    mob:mob,
    passwd:passwd,
  };
  const navigate = useNavigate();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPasswd(event.target.value);

  };
  let { logindata, setLogindata } = useContext(UserContext);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const mob_ip = useRef("")
  const pass_ip = useRef("")
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
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
       <AlertMessageComp
    type={alertdata.type}
    msg={alertdata.msg}
    vertical={alertdata.vertical}
    horizontal={alertdata.horizontal}
    setOpen={setAlertopen}
    open={alertopen}
  />
    <Grid  md={10} xs={12} sx={{display:"flex", justifyContent:"center", paddingTop:5, textAlign:"center", }}>
        <img style={{height:"20%",width:"15%",borderRadius:"10px", objectFit:"cover",}} src={logo} />
        </Grid>
      
    
      <Box
      className="signincontainer"
       
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height:"90vh",
          
        
           // background:"red"
        }}
      >
        
        <Grid
          container
          spacing={1}
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginBottom:"20px",
            boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
            backgroundColor:"whitesmoke",
            height:"70vh"
          }}
        >
          <Grid item md={10} xs={10} sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
            <h1 style={{ marginBottom: "20px" }}>Login</h1>
          </Grid>
          <Grid item md={10} xs={10}>
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              inputProps={{ maxLength: 10 }}
              variant="outlined"
              fullWidth
              onChange={async (e) => {
                let retdt = await alphanumeric(e);
                setMob(retdt);
              }}
             />
          </Grid>
          <Grid item md={10} xs={10} >
         <FormControl sx={{  }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Grid>
        <Grid item md={10} xs={12}>
          <Link style={{float: "right", cursor:"pointer", textDecoration:"none", fontWeight:"bold", color:'black'}}>Forgot Password?</Link>
        </Grid>
        <Grid item md={10} xs={12}>
          <span>
            By continuing, I agree to <a href="">Terms and Condition & Privacy Policy</a>
          </span>
        </Grid>
        <Grid item  md={10} xs={12} sx={{display:"flex",justifyContent:"center", alignItems:"center"}}
         onClick={() => {
          (async () => {
            try {
              const profile = await signindata(data);
              // alert(JSON.stringify(profile));
              sessionStorage.setItem("loginid",profile.data[0].logid);     
              let rettostmsg = tostmsg(profile);
              setAlertdata(rettostmsg);
              setAlertopen(rettostmsg.open);
              if (profile.code == 100) {
                setfocus(profile.id)
              }
              if (profile.code == 200) {
                setLogindata(profile.data[0])
                setTimeout(() => {                
                  navigate("/", { replace: false })                  
                  
                },500);
              }
          } catch (e) {}
          })();
        }}>
          <Button variant="contained" style={{backgroundColor:"#91031B",paddingLeft:"100px",paddingRight:"100px" }}>Sign In</Button>
        </Grid>
        </Grid>


        <Grid container spacing={1} md={5} xs={12} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF9B0",
            boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
            height:"70vh",
            position:"relative"
          }}>
            <CloseIcon className="signclose" sx={{fontSize:"35px",color:"black"}} 
            onClick={() => {
              navigate("/", { replace: false })                  
            }}
             />
        <Grid item md={12} xs={12} style={{ color: "darkred", display:"flex",justifyContent:"center", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <h1 className="heading">New User? Create an Account</h1>
          <h4 style={{marginTop:"20px"}}>Benefits of Creating an New Account</h4>
        </Grid>
        <Grid
        item
        className="cards"
        md={12}
        xs={12}
       
      >
        <Grid item md={4} xs={12} style={{ color: "darkred" }}>
          <h3>Encircle Programs</h3>
          <span>Redeem Encircle points</span>
          <span>on purchases</span>
        </Grid>{" "}
        <Grid item md={4} xs={12} style={{ color: "darkred" }}>
          <h3>Special Previews</h3>
          <span>Previews to our limited</span>
          <span> collection</span>
        </Grid>{" "}
        <Grid item md={4} xs={12} style={{ color: "darkred" }}>
          <h3>Tailor Made Offers</h3>
          <span>Receive tailor-made</span>
          <span> offers just for you</span>
        </Grid>
        </Grid>
        <Grid  md={12} xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", textAlign:"center",marginTop:"15px", height:"15vh"}}>
        <img style={{height:"100%",width:"60%",borderRadius:"10px", objectFit:"fill",}} src={img} />
        </Grid>
        <Grid item className="signinbtn" md={12} xs={12} sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
         <Link to="/signup" style={{textDecoration:"none"}}>
          <Button variant="contained" style={{backgroundColor:"#91031B",}}>Sign Up Now</Button>
          </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignInComp;
