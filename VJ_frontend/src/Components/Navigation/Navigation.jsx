import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import img from "../../img/whitelogo.png";
import { UserContext } from "../Product/UserContext";
import "./Navbar.css"

import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Label, Style } from "@mui/icons-material";
import { useState } from "react";
import img1 from "../../img/chatbot.png"
import ChatbotComp from "../Chatbot/ChatbotComp";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    border: "1px solid whitesmoke",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
// window.globalsearch="Welcome"

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { setSearch,setChathide,setSecond } = useContext(UserContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // let { logindata } = useContext(UserContext);
  const loginid=sessionStorage.getItem("loginid")

  const [logvisible, setLogvisible] = useState("");
  const [logoutvisible, setLogoutvisible] = useState("none");
  // alert(JSON.stringify(logindata.data))
  const navigate = useNavigate();
  const location = useLocation();
  // location.pathname
  // alert(location.pathname)
  useEffect(() => {
    if (loginid != 0) {
      setLogvisible("none");
      setLogoutvisible("");
    }
  });

  let search = "";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ marginTop: "35px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
          <p>SIGN UP</p>
        </Link>
      </MenuItem>
      <Link style={{ textDecoration: "none", color: "black" }} to="/signin">
        <MenuItem
          onClick={handleMenuClose}
          sx={{ display: logvisible.toString() }}
        >
          <p>LOG IN</p>
        </MenuItem>
      </Link>
      <MenuItem
        onClick={() => {
          // window.location.reload();
          sessionStorage.setItem("loginid",0);     
          window.location.reload();

        }}
        sx={{ display: logoutvisible.toString() }}
      >
        <p>LOG OUT</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{ height: "auto", marginBottom: "5%" }}>
      <Box
        sx={{
          flexGrow: 1,
          
        }}
      >
        <AppBar
          position="fixed"
          sx={{  height: "auto",backgroundColor:"#F53E64"
            }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } ,display: "flex",
              justifyContent: "space-between",}}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <img src={img} style={{}}></img>
              </Link>
            </Typography>
            <Search style={{}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{ width: "60vw" }}
                onChange={(e) => {
                  search = e.target.value;
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearch(search);
                    if (location.pathname == "/") {
                      // setSearch(search)

                      setTimeout(() => {
                        navigate("/product", { replace: false });
                      }, 500);
                    }
                  }
                }}
                onClick={() => {
                  setSearch(search);
                }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle style={{fontSize:"35px"}}/>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}

        <div 
        onClick={() => {
          setChathide("block");
        }}
        style={{}}>
        
        <img src={img1} 
        style={{backgroundColor:"blue",borderRadius:"100px",height:"70px",width:"70px",position:"fixed",bottom:70,right:40,zIndex:999}}></img>
        <span style={{borderRadius:"5px",backgroundColor:"white",padding:"3px",color:"black",position:"fixed",zIndex:999,bottom:40,right:0,border:"1px solid black"}}>How can I help you?</span>

    </div>

      </Box>
       <span style={{width:"auto",height:"70vh",position:"fixed",bottom:50,right:20,zIndex:999}}>  
       {/* <span >ChatBot</span> */}
        <ChatbotComp />
      </span>       
  
    // </div>
    
  );
}
