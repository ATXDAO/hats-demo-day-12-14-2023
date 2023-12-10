import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { useHatsIPFSData } from "~~/hooks/ERC1155Hooks";
import { HatViewData } from "~~/rep-tokens-ui-config/tokens/TokenInteractions";

export interface IEquippedHat {
  hatViewData: HatViewData;
  hatId: string;
  uniqueId: string;
  tooltipExtras: JSX.Element;
}

export const EquippedHat: React.FC<IEquippedHat> = props => {
  props.hatViewData.imageUri = props.hatViewData.imageUri.replace("ipfs://", "https://ipfs.io/ipfs/");
  const hatJson = useHatsIPFSData(props.hatViewData.details);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        <div className="flex flex-col justify-center items-center">
          <a data-tooltip-id={props.hatId}>
            <Image
              className="z-1"
              src={props.hatViewData.imageUri}
              alt={hatJson?.data?.name || "Hat"}
              width="200"
              height="200"
            />
          </a>
          <a data-tooltip-id={props.hatId} className="text-green-500 font-bold text-xl">
            {"[" + hatJson?.data?.name + "]"}
          </a>
        </div>

        <Tooltip id={props.uniqueId}>
          <div className="z-index 10000 w-96 space-y-0.5">
            <p className="text-green-400 font-bold text-xl">{hatJson?.data?.name}</p>
            <p>Soulbound</p>
            <p>Unique</p>
            <div className="flex">
              <p className="flex-auto">Head</p>
              <p className="flex-auto">Cloth</p>
            </div>
            <p className="">{hatJson?.data?.description}</p>
            <p>Durability 1337/1337</p>
            {props.tooltipExtras}
          </div>
        </Tooltip>
      </div>
    </>
  );
};
