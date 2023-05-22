import { Autocomplete, Box, Button, Checkbox, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import img from "../../img/necklace.png";
import imgs from "../../img/diamond.jfif";
import logo from "../../img/Logo.png"
import CloseIcon from "@mui/icons-material/Close";
import "../SignIn/Signin.css";
import { Link } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { alphanumeric, onlynumeric, tostmsg } from "../../MIS/Global";
import { GenerateOtp, Registerdata } from "../../API/Signup/Signup";
import AlertMessageComp from "../AlertMessageCom/AlertMessageComp";
import { useRef } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import {  Modal, Typography } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import { MuiOtpInput } from "mui-one-time-password-input";

function SignupComp() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPasswd(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [logid, setLogid] = useState();
  const [uname, setUname] = useState("");
  const [mob, setMob] = useState("");
  const [emailid, setEmailid] = useState("");
  const [passwd, setPasswd] = useState("");
  const [isstatus, setIsstatus] = useState(0);
  // const [otp, setOtp] = useState(0);
  const [gender, setGender] = useState();
  const [role, setRole] = useState("user");
  const [alertdata, setAlertdata] = React.useState({});
  const [alertopen, setAlertopen] = React.useState(false);

  const uname_ip = useRef("")
  const mob_ip = useRef("")
  const pass_ip = useRef("")
  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [otp, setOtp] = React.useState("");
  const [genotp, setGenotp] = React.useState("");
  const [verifyotp, setVerifyotp] = React.useState(genotp);

  const handleChange1 = (newValue) => {
    setOtp(newValue);
  };

  
  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
      setGender(radioGroup.value);
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  
  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };
  const setfocus=(id)=>{
switch (id) {
  case "uname":
    uname_ip.current.focus();
    
    break;
  case "mob":
   mob_ip.current.focus();
  break;
  case "passwd":
    pass_ip.current.focus();
  default :
    break;
}
  }

  let data = {
    logid: logid,
    uname:uname,
    mob:mob,
    emailid:emailid,
    passwd:passwd,
    isstatus:isstatus,
    otp:otp,
    role:role,
    gender:gender,

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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: "90vh",
          // marginTop:"50px",
          // width:"90vh",
          
        }}
      >
        <Grid className="cards" md={4} xs={12} sx={{}}>
          <img
            style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#FFFFFF",
            height: "80vh", width: "50vh", objectFit: "cover" }}
            src={img}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          md={4}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#FFFFFF",
            height: "80vh",
          }}
        >
           {/* <Grid item md={6} xs={8} sm={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              size="small"
              value={gender}
              onChange={(e, newvalue) => {
                setGender(newvalue.label);
              }}
              fullWidth
              options={Gender}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
          </Grid> */}
          <Grid
            item
            md={10}
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: "20px" }}>Sign Up</h1>
          </Grid>
          <Grid
            item
            md={5}
            xs={5}
          >
      <RadioGroup   sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:"row"
            }} name="use-radio-group" defaultValue="male">
      <MyFormControlLabel value="male" label="Male" control={<Radio />} />
      <MyFormControlLabel value="female" label="Female" control={<Radio />} />
    </RadioGroup>
          </Grid>
          <Grid item md={8} sx={10}>
            <TextField
              label="Enter Name"
              variant="outlined"
              fullWidth
              size="small"
              value={uname}
              inputRef={uname_ip}
              inputProps={{ maxLength: 100 }}
              onChange={async (e) => {
                let retdt = await alphanumeric(e);
                setUname(retdt);
              }}
              autoFocus={true}
            />
          </Grid>
          <Grid item md={8} sx={10}>
            <TextField
            value={mob}
              label="Enter Mobile Number"
              variant="outlined"
              fullWidth
              inputRef={mob_ip}
              inputProps={{ maxLength: 10 }}
              onChange={async (e) => {
                let retdt = await onlynumeric(e);
                setMob(retdt);
              }}
              size="small"
            />
          </Grid>
          <Grid item md={8} xs={10}>
            <TextField
              label="Enter Email"
              variant="outlined"
              fullWidth
              value={emailid}
              size="small"
              onChange={async (e) => {
                // let retdt = await onlynumeric(e);
                // setEmailid(retdt);
                setEmailid(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={8} xs={10}>
            <FormControl sx={{}} fullWidth size="small" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                inputRef={pass_ip}
                inputProps={{ maxLength: 20 }}
                onChange={handleChange("password")}
                // onChange={async (e) => {
                //   handleChange("password")
                // }}
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
          {/* <Grid item md={9} xs={12}>
            <Link
              style={{
                float: "right",
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Forgot Password?
            </Link>
          </Grid> */}
          <Grid md={7} xs={6}>
            <span>By Signing up to create an account I accept vaishanvi's</span>
            <Link>Terms & Conditions & Privacy Policy</Link>
          </Grid>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="modalnew">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      cursor: "pointer",
                    }}
                  >
                    <CloseIcon onClick={handleClose} />
                  </div>
                  <div className="centercss">
                    <div className="otpinputhead">Verification Code</div>
                    <div className="otpinput">
                      <p>Please Enter Verification code here </p>
                      <MuiOtpInput
                        value={otp}
                        length={6}
                        onChange={handleChange1}
                      />
                    </div>
                    <input type="submit" value="Verify OTP" class="btn solid"
                    onClick={()=>{alert(otp+"  "+verifyotp);
                    if(Number(otp)===Number(verifyotp)){alert("done")}
                    else{alert("Wrong input")}}}/>
                  </div>
                </Typography>
              </Box>
            </Modal>
          <Grid
            item
            className="signinbtn"
            md={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            
            onClick={() => {
              (async () => {
                try {
                  const profile = await Registerdata(data);
                  const profile1= await GenerateOtp(data);
                  // alert(JSON.stringify(profile));
                  let rettostmsg = tostmsg(profile);
                  setAlertdata(rettostmsg);
                  setAlertopen(rettostmsg.open);
                  if (profile.code == 100) {
                    setfocus(profile.id)
                  }
                  if (profile.code == 200) {
                    setTimeout(() => {
                      // window.location.href = "/signin";
                    });
                  }
              } catch (e) {}
              })();
            }}
          >
            <Button variant="contained" style={{ backgroundColor: "#91031B" }}>
              Sign Up Now
            </Button>
          </Grid>
          <p>
            Already a User ? <Link to="/signin">Login</Link>{" "}
          </p>
        </Grid>
        <Grid className="cards" md={4} xs={12} sx={{position:"relative"}}>
        
     <a href="/">  <CloseIcon className="signclose" sx={{fontSize:"35px"}} /> </a> 
          <img
            style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#FFFFFF",
            height: "80vh", width: "50vh", objectFit: "cover" }}
            src={imgs}
          />
        </Grid>
      </Box>
    </>
  );
}

export default SignupComp;
