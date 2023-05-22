import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import BannerScreen from "./Screens/Banner/BannerScreen";
import SliderScreen from "./Screens/Slider/SliderScreen";
import CategoryScreen from "./Screens/Category/CategoryScreen";
import ProductdetailScreen from "./Screens/Product/ProductdetailScreen";
import AllproductScreen from "./Screens/Product/Allproductscreen";
import UserContextProvider, { Consumer } from "./Components/Product/UserContext";
import SignInComp from "./Components/SignIn/SignInComp";
import SignupComp from "./Components/SignIn/SignupComp";
import SignInModel from "./Components/SignIn/SignInModel";
import ChatbotComp from "./Components/Chatbot/ChatbotComp";
import ChatFront from "./Components/Chatbot/ChatFront";


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
     <UserContextProvider>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/banner" element={<BannerScreen />} />
      <Route path="/slider" element={<SliderScreen />} />
      <Route path="/product" element={<AllproductScreen />}/>
      <Route path="/category" element={<CategoryScreen/>}/>
      <Route path="/productdetail" element={<ProductdetailScreen/>}/>
      <Route path="/productdetail/:id" element={<ProductdetailScreen/>}/>
      <Route path="/signin" element={<SignInComp/>}/>
      <Route path="/signup" element={<SignupComp/>}/>
      <Route path="/enquirysignin" element={<SignInModel/>}/>
      <Route path="/chatbot" element={<ChatbotComp/>}/>
      <Route path="/chat" element={<ChatFront/>}/>

    </Routes>
  </UserContextProvider>
  </BrowserRouter>,
   rootElement
   
  
);
