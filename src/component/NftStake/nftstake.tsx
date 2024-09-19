// import React, { useState } from "react";
// import { ConnectEmbed } from "../../app/thirdweb";
// import { client } from "../../app/client";
// import { chain } from "../../app/chain";
//  import { Staking } from "../Staking";
//  import { createWallet, inAppWallet } from "thirdweb/wallets";

// export default function NftStake() {
//     return(
//       <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         margin: "20px auto",
//         maxWidth: "500px",  
//       }}
//     >
    

// <ConnectEmbed
//   client={client}
//   wallets={[
//     createWallet("io.metamask"),
//     createWallet("com.coinbase.wallet"),
//     createWallet("me.rainbow"),
//   ]}
//   chain={chain}
// />


//       <Staking />
//     </div>
//     );
// }

import React, { useState } from "react";
import { ConnectEmbed, ConnectButton } from "../../app/thirdweb";
import { client } from "../../app/client";
import { chain } from "../../app/chain";
import { Staking } from "../Staking";
import { createWallet, inAppWallet } from "thirdweb/wallets";

// const wallets = [
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("me.rainbow"),
//   createWallet("io.rabby"),
//   createWallet("io.zerion.wallet"),
// ];

export default function NftStake() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px",
    }}>
      {/* <ConnectButton
        client={client}
        chain={chain}
        // connectModal={{ size: "wide" }}
      /> */}
      <Staking />
    </div>
  );
}