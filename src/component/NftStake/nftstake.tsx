import React, { useState } from "react";
import { ConnectEmbed } from "../../app/thirdweb";
import { client } from "../../app/client";
import { chain } from "../../app/chain";
 import { Staking } from "../Staking";
 import { createWallet, inAppWallet } from "thirdweb/wallets";

export default function NftStake() {
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px auto",
        maxWidth: "500px",  
      }}
    >
    

<ConnectEmbed
  client={client}
  wallets={[
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ]}
  chain={chain}
/>


      <Staking />
    </div>
    );
}