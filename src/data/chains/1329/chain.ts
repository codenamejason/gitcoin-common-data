import { TChain } from "../../../types";
import { seiIcon } from "../../icons";

export const seiMainnet: TChain = {
  id: 1329,
  name: "sei-mainnet",
  prettyName: "SEI Mainnet",
  type: "mainnet",
  blockExplorer: "https://seitrace.com/",
  icon: seiIcon,
  rpc: "https://evm-rpc.sei-apis.com",
  pricesFromTimestamp: 1704067200,
  tokens: [
    {
      code: "SEI",
      icon: seiIcon,
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1329,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "SEI",
    },
    {
      code: "SEI",
      icon: seiIcon,
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1329,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "SEI",
    },
  ],
  subscriptions: [
    // Allo V2
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      fromBlock: 78000000,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 78000000,
    },
  ],
};