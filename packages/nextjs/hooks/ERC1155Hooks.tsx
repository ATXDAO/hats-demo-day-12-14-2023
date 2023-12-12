import { useFetch } from "usehooks-ts";
import { HatNft } from "~~/components/my-hats/HatsTypes";
import { Nft } from "~~/components/reputation-tokens/TokenInteractions";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export function useUri(tokenId?: number) {
  return useScaffoldContractRead({
    contractName: "RepTokensInstance",
    functionName: "uri",
    args: [BigInt(Number(tokenId))],
  });
}

export function useGetBalance(address: string, tokenId: string) {
  return useScaffoldContractRead({
    contractName: "RepTokensInstance",
    functionName: "balanceOf",
    args: [address, BigInt(tokenId)],
  });
}

export function useIPFSData(uri: string) {
  const { data: json /* error: error0 */ } = useFetch<Nft>(uri?.replace("ipfs://", "https://ipfs.io/ipfs/"));
  return json;
}

export function useHatsIPFSData(uri: string) {
  const { data: json /* error: error0 */ } = useFetch<HatNft>(uri?.replace("ipfs://", "https://ipfs.io/ipfs/"));
  return json;
}
