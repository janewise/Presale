import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc721";
//import custom usestate
import {useState } from "react";

export const StakeRewards = () => {
  const account = useActiveAccount();
  //custom hover
  const [isHovered, setIsHovered] = useState(false);

  const {
    data: tokenBalance,
    isLoading: isTokenBalanceLoading,
    refetch: refetchTokenBalance,
  } = (useReadContract  as any)(balanceOf, {
    contract: REWARD_TOKEN_CONTRACT,
    owner: account?.address || "",
  });

  const { data: stakedInfo, refetch: refetchStakedInfo } = (useReadContract  as any)({
    contract: STAKING_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address || ""],
  });

  useEffect(() => {
    refetchStakedInfo();
    const interval = setInterval(() => {
      refetchStakedInfo();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "space-around",
        flexWrap: "wrap"
      }}
    >
      {!isTokenBalanceLoading && (
        <p style={{
          background: 'linear-gradient(90deg, #FE6BDA 0%, #00C2FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Wallet Balance: {toEther(BigInt(tokenBalance!.toString()))}</p>
      )}
      <h2 style={{ marginBottom: "20px" }}>
        Stake Rewards: {stakedInfo && toEther(BigInt(stakedInfo[1].toString()))}
      </h2>
      <TransactionButton
        transaction={() =>
          (prepareContractCall as any)({
            contract: STAKING_CONTRACT,
            method: "claimRewards",
          })
        }
        onTransactionConfirmed={() => {
          alert("Rewards claimed!");
          refetchStakedInfo();
          refetchTokenBalance();
        }}

        style={{
          border: "none",
          cursor: "pointer",
          borderRadius: "50px",
          width: "90%",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "rgba(255, 255, 255, 0.33)",
        }} 
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        className="buttonEffect">
        <span style={{
          fontSize: "16px",
          background: isHovered ? 'linear-gradient(90deg, #FF00C1 0%, #5200FF 100%)' : '',
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.64)" : "",
          padding: "8px 50px",
          color: isHovered ? 'transparent' : '#fff', 
          WebkitBackgroundClip: isHovered ? 'text' : 'none',
          WebkitTextFillColor: isHovered ? 'transparent' : '#fff',
        }}>Claim Rewards</span>
      
      </TransactionButton>
    </div>
  );
};

// import {useState,useEffect } from "react";
// import { balanceOf } from "thirdweb/extensions/erc20";
// import {  TransactionButton,  useActiveAccount,  useReadContract,} from "thirdweb/react";
// import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../../utils/contracts";
// import { prepareContractCall, toEther } from "thirdweb";

// export const StakeRewards = () => {

//   const account=useActiveAccount();

//   const {
//          data: tokenBalance,
//          isLoading: isTokenBalanceLoading,
//        } = useReadContract(
// balanceOf,{      contract: REWARD_TOKEN_CONTRACT,
//      address: account?.address || "",
// });
  
// const{
//   data:stakedInfo,
//   refetch:refetchStakedInfo,}=useReadContract({
//           contract: REWARD_TOKEN_CONTRACT,
//          method:"getStakeInfo",
//          params:[account?.address || ""],});

//   useEffect(() => {
//     refetchStakedInfo();
//     const interval = setInterval(() => {
//       refetchStakedInfo();
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//        return (
//         <div
//         style={{
//           width: "100%",
//           margin: "20px 0",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           alignContent: "space-around",
//           flexWrap: "wrap"
//         }}
//       >
//       {!isTokenBalanceLoading && (
//         <p style={{
//           background: 'linear-gradient(90deg, #FE6BDA 0%, #00C2FF 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent'
//         }}>
//           Wallet Balance:{toEther(BigInt(tokenBalance!.toString()))}</p>
//       )}
//       {/*  */}
//       <h2 style={{ marginBottom: "20px" }}>
//         {/* Stake Rewards: {stakedInfo && toEther(BigInt(stakedInfo[1].toString()))} */}
//         Stake Rewards: {stakedInfo && stakedInfo[1].toString()}
//       </h2>
//         </div>
//        )

// };