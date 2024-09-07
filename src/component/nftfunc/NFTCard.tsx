// import { client } from "../../app/client";
// import { NFT, prepareContractCall } from "thirdweb";
// import { MediaRenderer, TransactionButton } from "thirdweb/react";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { useState } from "react";
// import { approve } from "thirdweb/extensions/erc721";

// type OwnedNFTsProps = {
//   nft: NFT;
//   refetchOwnedNFTs: () => void;
//   refecthStakedInfo: () => void;
// };

// export const NFTCard = ({
//   nft,
//   refetchOwnedNFTs,
//   refecthStakedInfo,
// }: OwnedNFTsProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isApproved, setIsApproved] = useState(false);

//    //custom hover
//    const [isHovered, setIsHovered] = useState(false);
//   return (
//     <div style={{ margin: "10px" }}>
//       <MediaRenderer
//         client={client}
//         src={nft.metadata.image}
//         style={{
//           borderRadius: "10px",
//           marginBottom: "10px",
//           height: "200px",
//           width: "200px",
//         }}
//       />
//       <p style={{ margin: "0 10px 10px 10px" }}>{nft.metadata.name}</p>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         style={{
//           border: "none",
//           color: "#fff",
//           padding: "10px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           width: "100%",
//           backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//         }}  
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="buttonEffect">
//           <span style={{
//               background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
//               color: isHovered ? 'transparent' : '#fff', 
//               WebkitBackgroundClip: isHovered ? 'text' : 'initial',
//               WebkitTextFillColor: isHovered ? 'transparent' : '#fff',  
//             }}>
//                Stake
//               </span>
//       </button>
//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               minWidth: "300px",
//               backgroundColor: "#222",
//               padding: "20px",
//               borderRadius: "10px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 width: "100%",
//               }}
//             >
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   border: "none",
//                   backgroundColor: "transparent",
//                   color: "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//             <h3 style={{ margin: "10px 0" }}>You about to stake:</h3>
//             <MediaRenderer
//               client={client}
//               src={nft.metadata.image}
//               style={{
//                 borderRadius: "10px",
//                 marginBottom: "10px",
//               }}
//             />
//             {!isApproved ? (
//               <TransactionButton
//                 transaction={() =>
//                   approve({
//                     contract: NFT_CONTRACT,
//                     to: STAKING_CONTRACT.address,
//                     tokenId: nft.id,
//                   })
//                 }
//                 style={{
//                   width: "100%",
//                 }}
//                 onTransactionConfirmed={() => setIsApproved(true)}
//               >
//                 Approve
//               </TransactionButton>
//             ) : (
//               <TransactionButton
//                 transaction={() =>
//                   prepareContractCall({
//                     contract: STAKING_CONTRACT,
//                     method: "stake",
//                     params: [[nft.id]],
//                   })
//                 }
//                 onTransactionConfirmed={() => {
//                   alert("Staked!");
//                   setIsModalOpen(false);
//                   refetchOwnedNFTs();
//                   refecthStakedInfo();
//                 }}
//                 style={{
//                   width: "100%",
//                 }}
//               >
//                 Stake
//               </TransactionButton>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


import { client } from "../../app/client";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { approve } from "thirdweb/extensions/erc721";
 import { useState } from "react";
 import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";

 type OwnedNFTsProps = {
  nft: NFT;
  refetchOwnedNFTs: () => void;
  refecthStakedInfo: () => void;
};

export const NFTCard = ({
  nft,
  refetchOwnedNFTs,
  refecthStakedInfo,
}: OwnedNFTsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);


     //custom hover
   const [isHovered, setIsHovered] = useState(false);

  return(
 <div style={{ margin: "10px" }}>
   <MediaRenderer
         client={client}
         src={nft.metadata.image}
         style={{
           borderRadius: "10px",
           marginBottom: "10px",
           height: "200px",
           width: "200px",
         }}
      />
     <p style={{ margin: "0 10px 10px 10px" }}>{nft.metadata.name}</p>
           <button
        onClick={() => setIsModalOpen(true)}
        style={{
          border: "none",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer",
          width: "100%",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
        }}  
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="buttonEffect">
          <span style={{
              background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
              color: isHovered ? 'transparent' : '#fff', 
              WebkitBackgroundClip: isHovered ? 'text' : 'initial',
              WebkitTextFillColor: isHovered ? 'transparent' : '#fff',  
            }}>
               Stake
              </span>
      </button>
      {/*  */}
             {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minWidth: "300px",
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
            <h3 style={{ margin: "10px 0" }}>You about to stake:</h3>
            <MediaRenderer
              client={client}
              src={nft.metadata.image}
              style={{
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            {!isApproved ? (
              <TransactionButton
                transaction={() =>
                  approve({
                    contract: NFT_CONTRACT,
                    to: STAKING_CONTRACT.address,
                    tokenId: nft.id,
                  })
                }
                style={{
                  width: "100%",
                }}
                onTransactionConfirmed={() => setIsApproved(true)}
              >
                Approve
              </TransactionButton>
            ) : (
              // <TransactionButton
              //   transaction={() =>
              //     prepareContractCall({
              //       contract: STAKING_CONTRACT,
              //       method: "stake",
              //       params: [[nft.id]],
              //     })
              //   }
              //   onTransactionConfirmed={() => {
              //     alert("Staked!");
              //     setIsModalOpen(false);
              //     refetchOwnedNFTs();
              //     refecthStakedInfo();
              //   }}
              //   style={{
              //     width: "100%",
              //   }}
              // >
              //   Stake
              // </TransactionButton>
//               <TransactionButton
//   transaction={() => 
//     prepareContractCall({
//       contract: STAKING_CONTRACT,
//       method: "stake",
//       params:[nft.id],  // Adjust based on the function signature
//     })
//   }
//   onTransactionConfirmed={() => {
//     alert("Staked!");
//     setIsModalOpen(false);
//     refetchOwnedNFTs();
//     refecthStakedInfo();
//   }}
//   style={{
//     width: "100%",
//   }}
// >
//   Stake
// </TransactionButton>
<TransactionButton
  transaction={() =>
    (prepareContractCall as any)({
      contract: STAKING_CONTRACT,
      method: "stake",
      params: [[nft.id]],
    })
  }
  onTransactionConfirmed={() => {
    alert("Staked!");
    setIsModalOpen(false);
    refetchOwnedNFTs();
    refecthStakedInfo();
  }}
  style={{
    width: "100%",
  }}
>
  Stake
</TransactionButton>
            )}
          </div>
        </div>
      )}

 </div>
  )
};


// //
// import { client } from "../../app/client";
// import { NFT } from "thirdweb";
// import { MediaRenderer, TransactionButton } from "thirdweb/react";
// import { approve } from "thirdweb/extensions/erc721";
// import { useState } from "react";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { useContract } from "@thirdweb-dev/react";

// type OwnedNFTsProps = {
//   nft: NFT;
//   refetchOwnedNFTs: () => void;
//   refecthStakedInfo: () => void;
// };

// export const NFTCard = ({
//   nft,
//   refetchOwnedNFTs,
//   refecthStakedInfo,
// }: OwnedNFTsProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isApproved, setIsApproved] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const { contract: stakingContract } = useContract(STAKING_CONTRACT.address);

//   const handleStake = async () => {
//     if (stakingContract) {
//       try {
//         await stakingContract.call("stake", [nft.id]);
//         alert("Staked!");
//         setIsModalOpen(false);
//         refetchOwnedNFTs();
//         refecthStakedInfo();
//       } catch (error) {
//         console.error("Failed to stake NFT", error);
//       }
//     }
//   };

//   return (
//     <div style={{ margin: "10px" }}>
//       <MediaRenderer
//         client={client}
//         src={nft.metadata.image}
//         style={{
//           borderRadius: "10px",
//           marginBottom: "10px",
//           height: "200px",
//           width: "200px",
//         }}
//       />
//       <p style={{ margin: "0 10px 10px 10px" }}>{nft.metadata.name}</p>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         style={{
//           border: "none",
//           color: "#fff",
//           padding: "10px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           width: "100%",
//           backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="buttonEffect"
//       >
//         <span
//           style={{
//             background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
//             color: isHovered ? 'transparent' : '#fff',
//             WebkitBackgroundClip: isHovered ? 'text' : 'initial',
//             WebkitTextFillColor: isHovered ? 'transparent' : '#fff',
//           }}
//         >
//           Stake
//         </span>
//       </button>

//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               minWidth: "300px",
//               backgroundColor: "#222",
//               padding: "20px",
//               borderRadius: "10px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 width: "100%",
//               }}
//             >
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   border: "none",
//                   backgroundColor: "transparent",
//                   color: "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//             <h3 style={{ margin: "10px 0" }}>You are about to stake:</h3>
//             <MediaRenderer
//               client={client}
//               src={nft.metadata.image}
//               style={{
//                 borderRadius: "10px",
//                 marginBottom: "10px",
//               }}
//             />
//             {!isApproved ? (
//               <TransactionButton
//                 transaction={() =>
//                   approve({
//                     contract: NFT_CONTRACT,
//                     to: STAKING_CONTRACT.address,
//                     tokenId: nft.id,
//                   })
//                 }
//                 style={{
//                   width: "100%",
//                 }}
//                 onTransactionConfirmed={() => setIsApproved(true)}
//               >
//                 Approve
//               </TransactionButton>
//             ) : (
//               <TransactionButton
//                 transaction={handleStake}
//                 style={{
//                   width: "100%",
//                 }}
//               >
//                 Stake
//               </TransactionButton>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
