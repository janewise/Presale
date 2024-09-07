// import {
//   MediaRenderer,
//   TransactionButton,
//   useReadContract,
// } from "thirdweb/react";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { getNFT } from "thirdweb/extensions/erc721";
// import { client } from "../../app/client";
// import { prepareContractCall } from "thirdweb";
// //custom usestate import
// import { useState } from "react";

// type StakedNFTCardProps = {
//   tokenId: bigint;
//   refetchStakedInfo: () => void;
//   refetchOwnedNFTs: () => void;
// };

// export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({
//   tokenId,
//   refetchStakedInfo,
//   refetchOwnedNFTs,
// }) => {
//   const { data: nft } = useReadContract(getNFT, {
//     contract: NFT_CONTRACT,
//     tokenId: tokenId,
//   });

//     //custom hover
// const [isHovered, setIsHovered] = useState(false);
//   return (
//     <div style={{ margin: "10px" }}>
//       <MediaRenderer
//         client={client}
//         src={nft?.metadata.image}
//         style={{
//           borderRadius: "10px",
//           marginBottom: "10px",
//           height: "200px",
//           width: "200px",
//         }}
//       />
//       <p style={{ margin: "0 10px 10px 10px" }}>{nft?.metadata.name}</p>
//       <TransactionButton
//         transaction={() =>
//           prepareContractCall({
//             contract: STAKING_CONTRACT,
//             method: "withdraw",
//             params: [[tokenId]],
//           })
//         }
//         onTransactionConfirmed={() => {
//           refetchOwnedNFTs();
//           refetchStakedInfo();
//           alert("Withdrawn!");
//         }}
//         style={{
//           border: "none",
//           color: "#fff",
//           padding: "10px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           width: "100%",
//           fontSize: "12px",
//           backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//         }} 
//         // onMouseEnter={() => setIsHovered(true)}
//         // onMouseLeave={() => setIsHovered(false)}
//         className="buttonEffect">
//           <span style={{
//               background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
//               color: isHovered ? 'transparent' : '#fff', // Hide text for gradient application on hover
//               WebkitBackgroundClip: isHovered ? 'text' : 'initial',
//               WebkitTextFillColor: isHovered ? 'transparent' : '#fff',  
//             }}>
//               Withdraw
//               </span>
       
//       </TransactionButton>
//     </div>
//   );
// };

//

// import {MediaRenderer,TransactionButton,useReadContract,} from "thirdweb/react";
// import { getNFT } from "thirdweb/extensions/erc721";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { useState } from "react";
// import { prepareContractCall } from "thirdweb";
// import { client } from "../../app/client";

// type StakedNFTCardProps = {
//   tokenId: bigint;
//   refetchStakedInfo: () => void;
//   refetchOwnedNFTs: () => void;
// };

// export const StakedNFTCard= ({tokenId,refetchStakedInfo,refetchOwnedNFTs} : StakedNFTCardProps)=>{
//   const { data: nft } = useReadContract(getNFT, {
//     contract: NFT_CONTRACT,
//     tokenId: tokenId,
//   });
//   //

//     //custom hover
// const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div style={{ margin: "10px" }}>
//       <MediaRenderer
//         client={client}
//         src={nft?.metadata.image}
//         style={{
//           borderRadius: "10px",
//           marginBottom: "10px",
//           height: "200px",
//           width: "200px",
//         }}
//       />
//       <p style={{ margin: "0 10px 10px 10px" }}>{nft?.metadata.name}</p>


//       <TransactionButton
//         transaction={() =>
//           prepareContractCall({
//             contract: STAKING_CONTRACT,
//             method: "withdraw",
//             params: [[tokenId]],
//           })
//         }
//         onTransactionConfirmed={() => {
//           refetchOwnedNFTs();
//           refetchStakedInfo();
//           alert("Withdrawn!");
//         }}
//         style={{
//           border: "none",
//           color: "#fff",
//           padding: "10px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           width: "100%",
//           fontSize: "12px",
//           backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//         }} 
//         // onMouseEnter={() => setIsHovered(true)}
//         // onMouseLeave={() => setIsHovered(false)}
//         // className="buttonEffect"
//          >
//           {/* <span style={{
//               background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
//               color: isHovered ? 'transparent' : '#fff', // Hide text for gradient application on hover
//               WebkitBackgroundClip: isHovered ? 'text' : 'initial',
//               WebkitTextFillColor: isHovered ? 'transparent' : '#fff',  
//             }}> */}
//               Withdraw
//               {/* </span> */}
       
//       </TransactionButton>
//       </div>
//   )
// };


// import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
// import { getNFT } from "thirdweb/extensions/erc721";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { useState } from "react";
// import { prepareContractCall } from "thirdweb";
// import { client } from "../../app/client";

// type StakedNFTCardProps = {
//   tokenId: bigint;
//   refetchStakedInfo: () => void;
//   refetchOwnedNFTs: () => void;
// };

// export const StakedNFTCard = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }: StakedNFTCardProps) => {
//   const [nft, setNft] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   useReadContract(getNFT, {
//     contract: NFT_CONTRACT,
//     tokenId: tokenId,
//   })
//     .then(response => setNft(response.data))
//     .catch(err => setError(err.message));

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//        //custom hover
//  const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{ margin: "10px" }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <MediaRenderer
//         client={client}
//         src={nft?.metadata.image}
//         style={{
//           borderRadius: "10px",
//           marginBottom: "10px",
//           height: "200px",
//           width: "200px",
//         }}
//       />
//       <p style={{ margin: "0 10px 10px 10px" }}>{nft?.metadata.name}</p>

//       <TransactionButton
//         transaction={() =>
//           prepareContractCall({
//             contract: STAKING_CONTRACT,
//             method: "withdraw",
//             params: [[tokenId]],
//           })
//         }
//         onTransactionConfirmed={() => {
//           refetchOwnedNFTs();
//           refetchStakedInfo();
//           alert("Withdrawn!");
//         }}
//         style={{
//           border: "none",
//           color: "#fff",
//           padding: "10px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           width: "100%",
//           fontSize: "12px",
//           backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//         }}
//       >
//         Withdraw
//       </TransactionButton>
//     </div>
//   );
// };


//04
// import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
// import { getNFT } from "thirdweb/extensions/erc721";
// import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { useState } from "react";
// import { prepareContractCall } from "thirdweb";
// import { client } from "../../app/client";

// type StakedNFTCardProps = {
//   tokenId: bigint;
//   refetchStakedInfo: () => void;
//   refetchOwnedNFTs: () => void;
// };

// export const StakedNFTCard = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }: StakedNFTCardProps) => {
//   // Use the hook to read the NFT data
//   const { data: nft, isLoading, error } = useReadContract(getNFT, {
//     contract: NFT_CONTRACT,
//     tokenId: tokenId,
//   });

//   // Handle loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   // State for hover effect
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{ margin: "10px" }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <MediaRenderer
//         client={client}
//         src={nft?.metadata.image}
//         style={{
//           borderRadius: "10px",
//           marginBottom: "10px",
//           height: "200px",
//           width: "200px",
//         }}
//       />
//       <p style={{ margin: "0 10px 10px 10px" }}>{nft?.metadata.name}</p>

//       <TransactionButton
//         transaction={() =>
//           prepareContractCall({
//             contract: STAKING_CONTRACT,
//             method: "withdraw",
//             params: [[tokenId]],
//           })
//         }
//         onTransactionConfirmed={() => {
//           refetchOwnedNFTs();
//           refetchStakedInfo();
//           alert("Withdrawn!");
//         }}
//         style={{
//           border: "none",
//           color: "#fff",
//           padding: "10px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           width: "100%",
//           fontSize: "12px",
//           backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
//         }}
//       >
//         Withdraw
//       </TransactionButton>
//     </div>
//   );
// };

//05
import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { getNFT } from "thirdweb/extensions/erc721";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { client } from "../../app/client";

type StakedNFTCardProps = {
  tokenId: bigint;
  refetchStakedInfo: () => void;
  refetchOwnedNFTs: () => void;
};

export const StakedNFTCard = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }: StakedNFTCardProps) => {
  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Use the hook to read the NFT data
  const { data: nft, isLoading, error } = useReadContract(getNFT, {
    contract: NFT_CONTRACT,
    tokenId: tokenId,
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      style={{ margin: "10px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MediaRenderer
        client={client}
        src={nft?.metadata.image}
        style={{
          borderRadius: "10px",
          marginBottom: "10px",
          height: "200px",
          width: "200px",
        }}
      />
      <p style={{ margin: "0 10px 10px 10px" }}>{nft?.metadata.name}</p>

      <TransactionButton
        transaction={() =>
          prepareContractCall({
            contract: STAKING_CONTRACT,
            method: "withdraw",
            params: [[tokenId]],
          })
        }
        onTransactionConfirmed={() => {
          refetchOwnedNFTs();
          refetchStakedInfo();
          alert("Withdrawn!");
        }}
        style={{
          border: "none",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer",
          width: "100%",
          fontSize: "12px",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
        }}
      >
        Withdraw
      </TransactionButton>
    </div>
  );
};
