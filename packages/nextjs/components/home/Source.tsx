import { useERC1155Information } from "../reputation-tokens/TokenInteractions";
import { ImageProperties } from "../reputation-tokens/token-card/ImageCard";
import { DefaultTokenGroupCard } from "../reputation-tokens/token-group-card/DefaultTokenGroupCard";
import {
  mainCardPropertiesClasses,
  mainCardRenderProps,
  prettifyLoadingProps,
} from "../reputation-tokens/token-group-card/TokenGroupCardConfig";
import { useAccount } from "wagmi";

export const Source = () => {
  const { address } = useAccount();

  const { token0, token1 } = useERC1155Information(address);

  token0.image = token0.image?.replace("ipfs://", "https://ipfs.io/ipfs/");
  token1.image = token1.image?.replace("ipfs://", "https://ipfs.io/ipfs/");

  const tokenGroup = {
    token0: token0,
    token1: token1,
  };

  const mainCardImageProperties0 = new ImageProperties("Token 0", 256, 256);
  const mainCardImageProperties1 = new ImageProperties("Token 1", 256, 256);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        <div>
          <DefaultTokenGroupCard
            tokenGroup={tokenGroup}
            imageProperties0={mainCardImageProperties0}
            imageProperties1={mainCardImageProperties1}
            prettifyLoadingProps={prettifyLoadingProps}
            propertiesClasses={mainCardPropertiesClasses}
            renderProps={mainCardRenderProps}
          />
        </div>
      </div>
    </>
  );
};
