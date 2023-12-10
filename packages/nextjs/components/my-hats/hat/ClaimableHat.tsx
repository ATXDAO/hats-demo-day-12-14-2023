import Image from "next/image";
import { useClaimHat, useHatsClient } from "../../../hooks/atx-dao/hatsHooks";
import { HatViewData } from "../HatsTypes";
import { Tooltip } from "react-tooltip";
import { useAccount } from "wagmi";
import { useHatsIPFSData } from "~~/hooks/ERC1155Hooks";

export interface IClaimableHat {
  hatViewData: HatViewData;
  hatId: string;
  uniqueId: string;
  tooltipExtras: JSX.Element;
  isClaimable: boolean;
  textColor: string;
  onClaimed?: () => Promise<void>;
}

export const ClaimableHat: React.FC<IClaimableHat> = props => {
  const { address } = useAccount();

  const { hatsClient } = useHatsClient(5);
  const { claimHat } = useClaimHat(hatsClient, props.hatId, address);

  props.hatViewData.imageUri = props.hatViewData.imageUri.replace("ipfs://", "https://ipfs.io/ipfs/");
  const hatJson = useHatsIPFSData(props.hatViewData.details);

  let isClaimableOutput;

  let grayscale = "grayscale-[70%]";

  if (props.isClaimable) {
    grayscale = "";

    isClaimableOutput = (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1"
        onClick={async () => {
          await claimHat();

          if (props.onClaimed) await props.onClaimed();
        }}
      >
        Claim!
      </button>
    );
  }

  const nameClass = "font-bold text-xl";

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
        <a style={{ color: props.textColor }} data-tooltip-id={props.uniqueId} className={nameClass}>
          {"[" + hatJson?.data?.name + "]"}
        </a>
        {isClaimableOutput}
      </div>

      <Tooltip id={props.uniqueId} className="z-10">
        <div className="z-10 w-96 space-y-0.5">
          <p style={{ color: props.textColor }} className={nameClass}>
            {hatJson?.data?.name}
          </p>
          <p>Binds when claimed</p>
          <p>Unique</p>
          <div className="flex">
            <p className="flex-auto">Head</p>
            <p className="flex-auto">Cloth</p>
          </div>
          {props.tooltipExtras}
          <p style={{ color: "#cf8816" }} className="">
            {hatJson?.data?.description}
          </p>
        </div>
      </Tooltip>
    </div>
  );
};
