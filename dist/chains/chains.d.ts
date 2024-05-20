import type { TChain, TToken } from "../types";
import { Address } from "viem";
/**
 * Fetch chains for all supported networks.
 *
 * @returns `Promise<TChain>`
 */
export declare const fetchChainData: () => Promise<TChain[]>;
/**
 * Get all supported chains
 *
 * @returns `Promise<TChain>`
 */
export declare const getChains: () => Promise<TChain[]>;
/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChain>`
 */
export declare const getChainById: (chainId: number) => Promise<TChain>;
/**
 *
 * @returns `Promise<TToken>`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `Promise<TToken[]>`
 */
export declare const getTokens: () => Promise<TToken[]>;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TToken>`
 */
export declare const getTokensByChainId: (chainId: number) => Promise<TToken[]>;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TToken>`
 */
export declare const getTokensByChainIdAndAddress: (chainId: number, address: Address) => Promise<TToken | undefined>;
