import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Cotegory from "./Components/Category/Category";
import ImageSlider from "./Components/Product/ImageSlider";
import ProductSlider from "./Components/Product/ProductSlider";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import ShopbygenderScreen from "./Screens/Shopbygender/ShopbygenderScreen";
import NewScreen from "./Screens/Newforyou/NewScreen";
import TrendingproductScreen from "./Components/Product/Trendingpruduct";
import Menubar from "./Components/Menubar/Menubar"
import { useContext } from "react";
import { UserContext } from "./Components/Product/UserContext";
import { IMG_URL } from "./MIS/Global";
import { useState } from "react";

function App() {
  const { bannerdata } = useContext(UserContext);
  const [imglink, setImglink] = useState("")
  const [imglink1, setImglink1] = useState("")
  let img=""; 
  setTimeout(() => {
    img = JSON.parse(bannerdata?.data[0]?.imgdata);
    setImglink(IMG_URL + img[0].imglink);  
    img = JSON.parse(bannerdata?.data[1]?.imgdata);
    setImglink1(IMG_URL + img[0].imglink);
   
   }, 0);

  return (
    <div className="">
      {/* <Banner /> */}
      <Navigation />
      {/* <Menubar /> */}
      <ImageSlider />
      <Cotegory />
      <Banner imgurl={imglink}/>
      <ShopbygenderScreen/>
      <Banner imgurl={imglink1}/>
      
      <NewScreen/>
 
      <Footer/>
    </div>
  );
}

export default App;
