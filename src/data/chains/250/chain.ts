import { TChain } from "../../../types";

export const fantom: TChain = {
  id: 250,
  name: "fantom",
  type: "mainnet",
  blockExplorer: "https://ftmscan.com/",
  icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
  rpc: "https://rpcapi.fantom.network",
  pricesFromTimestamp: 1667354777,
  tokens: [
    {
      code: "USDC",
      icon: "https://ipfs.io/ipfs/QmTBHBZchoxncW1LXCvptTbvRzuZDN8yzze3xXrRsh2WZz",
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      decimals: 6,
      canVote: true,
      priceSource: {
        chainId: 250,
        address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      },
      redstoneTokenId: "USDC",
    },
    {
      code: "BUSD",
      address: "0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50",
      decimals: 18,
      icon: "BUSD",
      canVote: true,
      priceSource: {
        chainId: 250,
        address: "0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50",
      },
      redstoneTokenId: "BUSD",
    },
    {
      code: "DAI",
      icon: "https://ipfs.io/ipfs/QmcCsabAp3y4arCKfBgKPuUgjgteerQnZyCPZzUZFygr4x",
      address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 250,
        address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      },
      redstoneTokenId: "DAI",
    },
    {
      code: "FTM",
      icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 250,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "FTM",
    },
    {
      code: "FTM",
      icon: "https://ipfs.io/ipfs/QmXRGMaLqDiDoKjJQ3bUKWWYaQwE36jH7BbsQru5X4XXRo",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      canVote: true,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000",
      },
      redstoneTokenId: "FTM",
    },
    {
      code: "GcV",
      icon: "https://ipfs.io/ipfs/QmX2KeJ9xd3RWc4HxGVUWmyq4ELT2z4kJekfv4AgZqp6dz",
      address: "0x83791638da5EB2fAa432aff1c65fbA47c5D29510",
      decimals: 18,
      voteAmountCap: BigInt("1000000000000000000"),
      canVote: false,
      priceSource: {
        chainId: 250,
        address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      },
      redstoneTokenId: "GcV",
    },
    {
      code: "WFTM",
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      decimals: 18,
      icon: "FTM",
      canVote: true,
      priceSource: {
        chainId: 250,
        address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      },
      redstoneTokenId: "FTM",
    },
  ],
  subscriptions: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174",
      fromBlock: 65169115,
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0xfb08d1fD3a7c693677eB096E722ABf4Ae63B0B95",
      fromBlock: 66509340,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x534d2AAc03dCd0Cb3905B591BAf04C14A95426AB",
      fromBlock: 66509340,
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0xFA1D9FF7F885757fc20Fdd9D78B72F88B00Cff77",
      fromBlock: 66509340,
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0x9B1Ee60B539a3761E328a621A3d980EE9385679a",
      fromBlock: 66509340,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x4d1f64c7920262c8F78e989C9E7Bf48b7eC02Eb5",
      fromBlock: 65169115,
    },
    {
      address: "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
      contractName: "AlloV2/Registry/V1",
      fromBlock: 77624278,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 77624963,
    },
  ],
};
