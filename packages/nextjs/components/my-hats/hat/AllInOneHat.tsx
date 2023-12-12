import Image from "next/image";
import { HatViewData } from "../HatsTypes";
import { Tooltip } from "react-tooltip";
import { useHatsIPFSData } from "~~/hooks/ERC1155Hooks";

export interface IAllInOneHat {
  hatViewData: HatViewData;
  hatId: string;
  uniqueId: string;
  tooltipExtras: JSX.Element;
  isWearing: boolean;
  isClaimable: boolean;
  textColor: string;
  onClaimed?: () => Promise<void>;
}

export const AllInOneHat: React.FC<IAllInOneHat> = props => {
  props.hatViewData.imageUri = props.hatViewData.imageUri.replace("ipfs://", "https://ipfs.io/ipfs/");
  const hatJson = useHatsIPFSData(props.hatViewData.details);

  let output;
  let tooltipOutput;

  let grayscale = "grayscale-[70%]";

  if (props.isWearing) {
    grayscale = "";
    output = <p className="text-white">Is Wearing</p>;
    tooltipOutput = (
      <Tooltip id={props.uniqueId} className="z-10">
        <div className="z-10 w-96 space-y-0.5">
          <p style={{ color: props.textColor }} className="font-bold text-xl">
            {hatJson?.data?.name}
          </p>
          <p>Soulbound</p>
          <p>Unique</p>
          <div className="flex">
            <p className="flex-auto">Head</p>
            <p className="flex-auto">Cloth</p>
          </div>
          <p>Durability 1337/1337</p>
          {props.tooltipExtras}
          <p style={{ color: "#cf8816" }} className="">
            {hatJson?.data?.description}
          </p>
        </div>
      </Tooltip>
    );
  } else {
    tooltipOutput = (
      <Tooltip id={props.uniqueId} className="z-10">
        <div className="z-10 w-96 space-y-0.5">
          <p style={{ color: props.textColor }} className="font-bold text-xl">
            {hatJson?.data?.name}
          </p>
          <p>Binds when claimed</p>
          <p>Unique</p>
          <div className="flex">
            <p className="flex-auto">Head</p>
            <p className="flex-auto">Cloth</p>
          </div>
          <p style={{ color: "#cf8816" }} className="">
            {hatJson?.data?.description}
          </p>
          {props.tooltipExtras}
        </div>
      </Tooltip>
    );

    if (props.isClaimable) {
      grayscale = "";

      output = (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1"
          onClick={async () => {
            if (props.onClaimed) await props.onClaimed();
          }}
        >
          Claim!
        </button>
      );
    }
  }

  return (
    <div className="z-1 flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
      <div className="z-1 flex flex-col justify-center items-center">
        <a data-tooltip-id={props.uniqueId}>
          <Image
            className={grayscale}
            src={props.hatViewData.imageUri}
            alt={hatJson?.data?.name || "Hat"}
            width="200"
            height="200"
            priority
          />
        </a>
        <a style={{ color: props.textColor }} data-tooltip-id={props.uniqueId} className="font-bold text-xl">
          {"[" + hatJson?.data?.name + "]"}
        </a>
        {output}
      </div>

      {tooltipOutput}
    </div>
  );
};
