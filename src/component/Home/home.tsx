import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css"
import { Social } from "../social";
import coin from "./homeimg/square1.png"
import polygon from "./homeimg/Polygon.png"
import uniswap from "./homeimg/Uniswap.png"
import opensea from "./homeimg/Opensea.png"
import unity from "./homeimg/Unity.png"

export function Home() {
  return (
 
  <div className="container-fluid maindiv">
    {/* main */}
    <div className="homeflex">
      {/* leftside */}
      <div className="homeleft">
        <h1 className="gladiator">Mythical Gladiator</h1>
        <h1 className=" myg">MYG Coin take you <br /> future of gaming</h1>
        {/* paragraph */}
        <div >
<p>Lorem ipsum dolor sit amet consectetur. Id mauris vivamus nibh quis erat sed ac egestas. Hendrerit nisi eget vel facilisis a. Habitasse eget faucibus morbi proin pretium vitae tempor enim at. Nec sit neque bibendum adipiscing arcu orci sed mauris cursus. Pellentesque augue in quis leo quis.</p>
        </div>
        {/* two button */}
        <div className="twobtn">
          <NavLink to="/presale" className="homesale"><p>Buy PreSale</p></NavLink>
          <NavLink to="/whitepaper" className="homesale"><p>White Paper</p></NavLink>     
        </div>
      </div>

          {/* rightside */}
      <div className="homeright">
        <img src={coin} alt="coin" className="homecoin"/>
      </div>
    </div>

    <div className="pataner">
      <h3>bartanderSkip</h3>
      <div className="container-fluid ">
        <div className="row patanerbox">
          <img src={opensea} alt="coin" className="col-6 col-sm-3 patanericon"/>
      <img src={uniswap} alt="coin" className="col-6 col-sm-3 patanericon"/>
      <img src={polygon} alt="coin" className="col-6  col-sm-3 patanericon"/>
      <img src={unity} alt="coin" className="col-6 col-sm-3 patanericon"/>
        </div>
      </div>
    </div>
    {/* social */}
    <Social />
  </div>

 
  );
}
