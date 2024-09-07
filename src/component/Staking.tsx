// "use client";

// import { chain } from "../app/chain";
// import { client } from "../app/client";
// import {
//   ConnectButton,
//   TransactionButton,
//   useActiveAccount,
//   useReadContract,
// } from "thirdweb/react";
// import { StakeRewards } from "./StakeRewards";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { NFT } from "thirdweb";
// import { useEffect, useState } from "react";
// import {
//   claimTo,
//   getNFTs,
//   ownerOf,
//   totalSupply,
// } from "thirdweb/extensions/erc721";
// import { NFTCard } from "./NFTCard";
// import { StakedNFTCard } from "./StakedNFTCard";

// export const Staking = () => {
//   const account = useActiveAccount();
//   //custom hover
// const [isHovered, setIsHovered] = useState(false);

//   const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);

//   const getOwnedNFTs = async () => {
//     let ownedNFTs: NFT[] = [];

//     const totalNFTSupply = await totalSupply({
//       contract: NFT_CONTRACT,
//     });
//     const nfts = await getNFTs({
//       contract: NFT_CONTRACT,
//       start: 0,
//       count: parseInt(totalNFTSupply.toString()),
//     });

//     for (let nft of nfts) {
//       const owner = await ownerOf({
//         contract: NFT_CONTRACT,
//         tokenId: nft.id,
//       });
//       if (owner === account?.address) {
//         ownedNFTs.push(nft);
//       }
//     }
//     setOwnedNFTs(ownedNFTs);
//   };

//   useEffect(() => {
//     if (account) {
//       getOwnedNFTs();
//     }
//   }, [account]);

//   const { data: stakedInfo, refetch: refetchStakedInfo } = useReadContract({
//     contract: STAKING_CONTRACT,
//     method: "getStakeInfo",
//     params: [account?.address || ""],
//   });

//   if (account) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           borderRadius:"16px",
//           padding:"20px 5px",
//         }} className="glassyMobileView"
//       >
//         <ConnectButton client={client} chain={chain}/>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             margin: "20px 0",
//             // change to 90 from 100
//             width: "90%",
//           }}
//         >
//           <h2 style={{ marginRight: "20px",color:"#7AE2F9"}}>Claim NFT to Stake</h2>
//           <TransactionButton  
//             transaction={() =>
//               claimTo({
//                 contract: NFT_CONTRACT,
//                 to: account?.address || "",
//                 quantity: BigInt(1),
//               })
//             }
//             onTransactionConfirmed={() => {
//               alert("NFT claimed!");
//               getOwnedNFTs();
//             }}
           
//               style={{
//              fontSize: "12px",
//              padding: "10px 20px",
//              borderRadius: "10px",    
//              backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//              }}  
//             //  onMouseEnter={() => setIsHovered(true)}
//             //  onMouseLeave={() => setIsHovered(false)}
//              className="buttonEffect">
//             <span style={{
//               background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
//               color: isHovered ? 'transparent' : '#fff', // Hide text for gradient application on hover
//               WebkitBackgroundClip: isHovered ? 'text' : 'initial',
//               WebkitTextFillColor: isHovered ? 'transparent' : '#fff',  
//             }}>
//                Claim NFT
//               </span>
//           </TransactionButton>
//         </div>
//         <hr
//           style={{
//             width: "100%",
//             border: "1px solid #F3A3E7",
//           }}
//         />
//         <div
//           style={{
//             margin: "20px 0",
//             //change 90 from 100
//             width: "90%",
//           }}
//         >
//           <h2>Owned NFTs</h2>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               width: "500px",
//             }}
//           >
//             {ownedNFTs && ownedNFTs.length > 0 ? (
//               ownedNFTs.map((nft) => (
//                 <NFTCard
//                   key={nft.id}
//                   nft={nft}
//                   refetchOwnedNFTs={getOwnedNFTs}
//                   refecthStakedInfo={refetchStakedInfo}
//                 />
//               ))
//             ) : (
//               <p>You own 0 NFTs</p>
//             )}
//           </div>
//         </div>
//         <hr
//           style={{
//             width: "100%",
//             border: "1px solid #F3A3E7",
//           }}
//         />
//         <div style={{ 
//           //change 90 from 100
//           width: "90%", 
//           margin: "20px 0" 
//           }}>
//           <h2>Staked NFTs</h2>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               width: "500px",
//             }}
//           >
//             {stakedInfo && stakedInfo[0].length > 0 ? (
//               stakedInfo[0].map((nft: any, index: number) => (
//                 <StakedNFTCard
//                   key={index}
//                   tokenId={nft}
//                   refetchStakedInfo={refetchStakedInfo}
//                   refetchOwnedNFTs={getOwnedNFTs}
//                 />
//               ))
//             ) : (
//               <p style={{ margin: "20px 0" }}>No NFTs staked</p>
//             )}
//           </div>
//         </div>
//         <hr
//           style={{
//             width: "100%",
//             border: "1px solid #F3A3E7",
//           }}
//         />
//         <StakeRewards />
//       </div>
//     );
//   }
// };

// import { useEffect, useState } from "react";
// import {ConnectButton,TransactionButton,useActiveAccount,useReadContract,} from "thirdweb/react";
// import { client } from "../app/client";
// import { chain } from "../app/chain";
//  import { claimTo,getNFTs,ownerOf,totalSupply,} from "thirdweb/extensions/erc721";
//  import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
//  import { NFT } from "thirdweb";
// //
// import { NFTCard } from "./nftfunc/NFTCard";
// import { StakedNFTCard } from "./nftfunc/StakedNFTCard";
// import { StakeRewards } from "./nftfunc/StakeRewards";

// export const Staking = () => {
//      const account = useActiveAccount();

//       //custom hover
//  const [isHovered, setIsHovered] = useState(false);

//    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);

//      const getOwnedNFTs = async () => {
//     let ownedNFTs: NFT[] = [];

//     const totalNFTSupply = await totalSupply({
//       contract: NFT_CONTRACT,
//     });

//     const nfts = await getNFTs({
//       contract: NFT_CONTRACT,
//       start: 0,
//       count: parseInt(totalNFTSupply.toString()),
//     });

//     for (let nft of nfts) {
//       const owner = await ownerOf({
//         contract: NFT_CONTRACT,
//         tokenId: nft.id,
//       });
//       if (owner === account?.address) {
//         ownedNFTs.push(nft);
//       }
//     }
//     setOwnedNFTs(ownedNFTs);
//   };

//     useEffect(() => {
//     if (account) {
//       getOwnedNFTs();
//     }
//   }, [account]);

//     const { data: stakedInfo, refetch: refetchStakedInfo } = useReadContract({
//     contract: STAKING_CONTRACT,
//     method: "getStakeInfo",
//     params: [account?.address || ""],
//   });

//      if(account){
//       return(
//         <div
//                  style={{
//                    display: "flex",
//                    flexDirection: "column",
//                    alignItems: "center",
//                    borderRadius:"16px",
//                    padding:"20px 5px",
//                    width:'100%',
//                  }} className="glassyMobileView"
//                >
//                 <ConnectButton client={client} chain={chain} />
//                 {/*  */}
//                 <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             margin: "20px 0",
//             // change to 90 from 100
//             width: "100%",
//           }}
//         >
//           <p style={{ marginRight: "20px",color:"#7AE2F9"}}>Claim NFT to Stake</p>
//           {/* <TransactionButton  
//             transaction={() =>
//               claimTo({
//                 contract: NFT_CONTRACT,
//                 to: account?.address || "",
//                 quantity: BigInt(1),
//               })
//             }
//             onTransactionConfirmed={() => {
//               alert("NFT claimed!");
//               getOwnedNFTs();
//             }}
           
//               style={{
//              fontSize: "12px",
//              padding: "10px 20px",
//              borderRadius: "10px",    
//            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//              }}  
//               // onMouseEnter={() => setIsHovered(true)}
//               // onMouseLeave={() => setIsHovered(false)}
//              className="buttonEffect"
//              >
//             <span style={{
//               background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
//               color: isHovered ? 'transparent' : '#fff', // Hide text for gradient application on hover
//               WebkitBackgroundClip: isHovered ? 'text' : 'initial',
//               WebkitTextFillColor: isHovered ? 'transparent' : '#fff',  
//             }}>
//                Claim NFT
//               </span>
//           </TransactionButton> */}
//                     <TransactionButton
//                         transaction={() => (
//                             claimTo({
//                                 contract: NFT_CONTRACT,
//                                 to: account?.address || "",
//                                 quantity: BigInt(1)
//                             })
//                         )}
//                         onTransactionConfirmed={() => {
//                             alert("NFT claimed!");
//                             getOwnedNFTs();
//                         }}
//                         style={{
//                             fontSize: "12px",
//                             backgroundColor: "#333",
//                             color: "#fff",
//                             padding: "10px 20px",
//                             borderRadius: "10px",
//                         }}
//                     >Claim NFT</TransactionButton>
//         </div>
//         {/*  */}
//         <hr
//            style={{
//              width: "100%",
//              border: "1px solid #F3A3E7",
//            }}
//          />
//         {/*  */}
//         <div
//           style={{
//             margin: "20px 0",
//             //change 90 from 100
//             width: "90%",
//           }}
//         >
//            <h4>Owned NFTs</h4>
//            <div
//              style={{
//                display: "flex",
//                flexDirection: "row",
//                flexWrap: "wrap",
//                width: "100%",
//              }}
//            >
//                          {ownedNFTs && ownedNFTs.length > 0 ? (
//               ownedNFTs.map((nft) => (
//                 <NFTCard
//                   key={nft.id}
//                   nft={nft}
//                   refetchOwnedNFTs={getOwnedNFTs}
//                   refecthStakedInfo={refetchStakedInfo}
//                 />
              
//               ))
//             ) : (
//               <p>You own 0 NFTs</p>
//             )}
//             </div>
//           </div>
//           {/*  */}
//           <hr
//            style={{
//              width: "100%",
//              border: "1px solid #F3A3E7",
//            }}
//          />
//           {/*  */}
//                   <div style={{ 
//           //change 90 from 100
//           width: "90%", 
//           margin: "20px 0" 
//           }}>
//           <h4>Staked NFTs</h4>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               width: "100%",
//             }}
//           >
//             {stakedInfo && stakedInfo[0].length > 0 ? (
//               // stakedInfo[0].map((nft: any, index: number) => (
//                 stakedInfo[0].map((tokenId:bigint) => (
//                 <StakedNFTCard
//                   key={tokenId}
//                   tokenId={tokenId}
//                   refetchStakedInfo={refetchStakedInfo}
//                   refetchOwnedNFTs={getOwnedNFTs}
//                 />
//               ))
//             ) : (
//               <p style={{ margin: "20px 0" }}>No NFTs staked</p>
//             )}
//           </div>
//         </div>
//         {/*  */}
//         <hr
//            style={{
//              width: "100%",
//              border: "1px solid #F3A3E7",
//            }}
//          />
//         {/*  */}
//         <StakeRewards/>
//         </div>
//       )
//      }
    
// }

import { useEffect, useState } from "react";
import {
  ConnectButton,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { client } from "../app/client";
import { chain } from "../app/chain";
import {
  claimTo,
  getNFTs,
  ownerOf,
  totalSupply,
} from "thirdweb/extensions/erc721";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { NFT } from "thirdweb";

import { NFTCard } from "./nftfunc/NFTCard";
import { StakedNFTCard } from "./nftfunc/StakedNFTCard";
import { StakeRewards } from "./nftfunc/StakeRewards";

export const Staking = () => {
  const account = useActiveAccount();
  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
  const [isHovered, setIsHovered] = useState(false); // Hover state

  const getOwnedNFTs = async () => {
    const totalNFTSupply = await totalSupply({ contract: NFT_CONTRACT });
    const nfts = await getNFTs({
      contract: NFT_CONTRACT,
      start: 0,
      count: parseInt(totalNFTSupply.toString()),
    });

    const ownedNFTs = await Promise.all(
      nfts.map(async (nft) => {
        const owner = await ownerOf({
          contract: NFT_CONTRACT,
          tokenId: nft.id,
        });
        return owner === account?.address ? nft : null;
      })
    );

    setOwnedNFTs(ownedNFTs.filter((nft) => nft !== null) as NFT[]);
  };

  useEffect(() => {
    if (account) {
      getOwnedNFTs();
    }
  }, [account]);

  const { data: stakedInfo, refetch: refetchStakedInfo } =(useReadContract as any)({
    contract: STAKING_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address || ""],
  });

  if (account) {
    return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        padding: "20px 5px",
        width: "100%",
      }}
      className="glassyMobileView"
    >
      <ConnectButton client={client} chain={chain} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px 0",
          width: "100%",
        }}
      >
        <p style={{ marginRight: "20px", color: "#7AE2F9" }}>
          Claim NFT to Stake
        </p>

        <TransactionButton
          transaction={() =>
            claimTo({
              contract: NFT_CONTRACT,
              to: account?.address || "",
              quantity: BigInt(1),
            })
          }
          onTransactionConfirmed={() => {
            alert("NFT claimed!");
            getOwnedNFTs();
          }}
          style={{
            fontSize: "12px",
            backgroundColor: isHovered
              ? "rgba(255, 255, 255, 0.64)"
              : "rgba(255, 255, 255, 0.33)",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          className="buttonEffect"
        >
          <span
            style={{
              background: isHovered
                ? "linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)"
                : "",
              color: isHovered ? "transparent" : "#fff",
              WebkitBackgroundClip: isHovered ? "text" : "initial",
              WebkitTextFillColor: isHovered ? "transparent" : "#fff",
            }}
          >
            Claim NFT
          </span>
        </TransactionButton>
      </div>

      <hr style={{ width: "100%", border: "1px solid #F3A3E7" }} />

      <div style={{ margin: "20px 0", width: "90%" }}>
        <h4>Owned NFTs</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {ownedNFTs.length > 0 ? (
            ownedNFTs.map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                refetchOwnedNFTs={getOwnedNFTs}
                refecthStakedInfo={refetchStakedInfo}
              />
            ))
          ) : (
            <p>You own 0 NFTs</p>
          )}
        </div>
      </div>

      <hr style={{ width: "100%", border: "1px solid #F3A3E7" }} />

      <div style={{ width: "90%", margin: "20px 0" }}>
        <h4>Staked NFTs</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {stakedInfo && stakedInfo[0]?.length > 0 ? (
            stakedInfo[0].map((tokenId: bigint) => (
              <StakedNFTCard
                key={tokenId.toString()}
                tokenId={tokenId}
                refetchStakedInfo={refetchStakedInfo}
                refetchOwnedNFTs={getOwnedNFTs}
              />
            ))
          ) : (
            <p style={{ margin: "20px 0" }}>No NFTs staked</p>
          )}
        </div>
      </div>

      <hr style={{ width: "100%", border: "1px solid #F3A3E7" }} />

      <StakeRewards />
    </div>
    )
  }

  return (
    
   <div>connect wallet</div>
  );
};
