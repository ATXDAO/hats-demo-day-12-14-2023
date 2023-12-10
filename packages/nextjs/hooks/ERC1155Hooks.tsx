import { useFetch } from "usehooks-ts";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { HatNft, Nft } from "~~/rep-tokens-ui-config/tokens/TokenInteractions";

export function useUri(tokenId?: number) {
  return useScaffoldContractRead({
    contractName: "RepTokensInstance",
    functionName: "uri",
    args: [BigInt(Number(tokenId))],
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
