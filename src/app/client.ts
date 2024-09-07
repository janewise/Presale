//  import { createThirdwebClient } from 'thirdweb';


// const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

// export const client = createThirdwebClient({
//     clientId: CLIENT_ID,
// });

import { createThirdwebClient } from "thirdweb"; // Correct import from thirdweb SDK


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;

export const client = createThirdwebClient({
    clientId: CLIENT_ID,
});


// Use sdk in your React components

// import { createThirdwebClient } from "thirdweb";
// import { ConnectButton } from "thirdweb/react";

// import { createWallet } from "thirdweb/wallets";

// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;

// export const client = createThirdwebClient({
//   clientId: "....",
// });

// const wallets = [
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("me.rainbow"),
//   createWallet("io.rabby"),
//   createWallet("io.zerion.wallet"),
// ];

// function Example() {
//   return (
//     <ConnectButton
//       client={client}
//       wallets={wallets}
//       connectModal={{ size: "wide" }}
//     />
//   );
// }
