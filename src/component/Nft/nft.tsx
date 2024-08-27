// import React from "react";
// import "./nft.css"
// import nftimg from "./nftimg/NFT.png"
// import goblin from "./nftimg/Goblin1.png"
// import slime from "./nftimg/Slime1.png"
// import elf from "./nftimg/Elf1.png"
// import { Social } from "../social";

// export function Nft() {
//   return (
 
//   <div className=" nftmain">
//     {/* main */}
//   <img src={nftimg} alt="nftimg"  className="nftlogo"/>
//   <div className="container-fluid row isekai">
//     <div className="col-4 col-lg-3">
//     <img src={slime} alt="nftimg"  />
//     </div>
//     <div className="col-4 col-lg-3">
//     <img src={goblin} alt="nftimg"  />
//       </div>
//       <div className="col-4 col-lg-3">
//       <img src={elf} alt="nftimg"  />
//       </div>
//       <div className="col-4 col-lg-3">
//       <img src={elf} alt="nftimg"  />
//       </div>
//       <div className="col-4 col-lg-3">
//       <img src={elf} alt="nftimg"  />
//       </div>
//       <div className="col-4 col-lg-3">
//       <img src={elf} alt="nftimg" />
//       </div>
//   </div>
//   <br />
//   <br />
//   <Social/>
//   <br />
//   </div>

 
//   );
// }

import React, { useState } from "react";
import "./nft.css";
import nftimg from "./nftimg/NFT.png";
import goblin from "./nftimg/Goblin1.png";
import slime from "./nftimg/Slime1.png";
import elf from "./nftimg/Elf1.png";
import { Social } from "../social";

export function Nft() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nftDetails: { [key: string]: { level: string, rarity: string, race: string, price: string, openseaLink: string } } = {
    [slime]: {
      level: "Level 1",
      rarity: "Common",
      race: "Slime",
      price: "0.01 ETH",
      openseaLink: "https://opensea.io/assets/slime"
    },
    [goblin]: {
      level: "Level 2",
      rarity: "Rare",
      race: "Goblin",
      price: "0.03 ETH",
      openseaLink: "https://opensea.io/assets/goblin"
    },
    [elf]: {
      level: "Level 3",
      rarity: "Epic",
      race: "Elf",
      price: "0.05 ETH",
      openseaLink: "https://opensea.io/assets/elf"
    }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleBuy = () => {
    if (selectedImage) {
      const openseaLink = nftDetails[selectedImage].openseaLink;
      window.open(openseaLink, "_blank");
      handleClose();
    }
  };

  return (
    <div className="nftmain">
      <img src={nftimg} alt="nftimg" className="nftlogo" />
      <div className="container-fluid row isekai">
        <div
          className="col-4 col-lg-3 nft-item"
          onClick={() => handleImageClick(slime)}
        >
          <img src={slime} alt="slime" />
        </div>
        <div
          className="col-4 col-lg-3 nft-item"
          onClick={() => handleImageClick(goblin)}
        >
          <img src={goblin} alt="goblin" />
        </div>
        <div
          className="col-4 col-lg-3 nft-item"
          onClick={() => handleImageClick(elf)}
        >
          <img src={elf} alt="elf" />
        </div>
        <div
          className="col-4 col-lg-3 nft-item"
          onClick={() => handleImageClick(elf)}
        >
          <img src={elf} alt="elf" />
        </div>
        <div
          className="col-4 col-lg-3 nft-item"
          onClick={() => handleImageClick(elf)}
        >
          <img src={elf} alt="elf" />
        </div>
        <div
          className="col-4 col-lg-3 nft-item"
          onClick={() => handleImageClick(elf)}
        >
          <img src={elf} alt="elf" />
        </div>
      </div>
      <br />
      <br />
      <Social />
      <br />

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedImage} alt="Selected NFT" className="modal-image" />
            <div  className="modal-detail row">
            <div className="nftdetailbox col-6 col-lg-3"><div><h5>Rarity</h5><p>{nftDetails[selectedImage].rarity}</p></div></div>
            <div className="nftdetailbox  col-6 col-lg-3"><div><h5>Level</h5><p>{nftDetails[selectedImage].level}</p></div></div>
              <div className="nftdetailbox  col-6 col-lg-3"><div><h5>Average Price</h5><p>{nftDetails[selectedImage].price}</p></div></div>
              <div className="nftdetailbox  col-6 col-lg-3"><div><h5>Race</h5><p>{nftDetails[selectedImage].race}</p></div></div>
            </div>
            <div className="modal-buttons">
              <button onClick={handleBuy} className="buynft" >Buy</button>
              <span onClick={handleClose} className="cancel">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
              </span>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
