import { chain } from "../app/chain";
import { client } from "../app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingContractsABI";

const nftContractAddress = "0x37b233040eA24d474619d18eD5B121cae5febd2d";
const rewardTokenContractAddress = "0x9506A4dCdcDeAFD9796f835FB2a90482E7Aa05Fc";
const stakingContractAddress = "0xE167D91364b4942a1E463958802280886E33DA87";

export const NFT_CONTRACT =( getContract as any)({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT =( getContract as any)({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT =( getContract as any)({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI,
});