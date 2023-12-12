import Image from "next/image";
import externalContracts from "../../contracts/externalContracts";
import { useClaimReputation, useGetRemainingTime } from "../../hooks/atx-dao/CadentReputationDistributorHooks";
import dragon from "./assets/dragon.png";
// import memberParty from "./assets/member-party.png";
import { useAccount } from "wagmi";
import { useGetBalance } from "~~/hooks/ERC1155Hooks";

export const Source = () => {
  const { address } = useAccount();

  const remainingTime = useGetRemainingTime(address);

  const { data: balance0 } = useGetBalance(externalContracts[5].CadentRepDistributor.address, "0");

  const claimReputation = useClaimReputation();

  let remainingTimeOutput;
  if (remainingTime !== undefined) {
    if (remainingTime.toString() > "0") {
      remainingTimeOutput = <span className="text-2xl text-white">Please check back later to redeem more tokens!</span>;
    } else {
      remainingTimeOutput = (
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white">{"Please take your share from the coinpurse below!"}</p>
          {/* <p className="text-2xl text-white">
            You can claim some Reputation Tokens as a thank you for your attendance!
          </p> */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1"
            onClick={async () => {
              await claimReputation();
            }}
          >
            Claim 100 Tokens!
          </button>
        </div>
      );
    }
  } else {
    remainingTimeOutput = <div></div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        <Image src={dragon} alt="Image" width="400" height="400" />
        <div className="flex flex-col justify-center items-center mx-96">
          <p className="text-2xl text-white text-center">
            {
              "All hail to the fellow contributors of ATX DAO who have succesfully tamed the terrifying Dragon: Centralization. It has become reborn in the name of the Light: Decentralization."
            }
          </p>
          <p className="text-2xl text-white text-center">
            {"As a reward, ATX DAO's members have voted to reward the mighty adventurers for their courageous efforts."}
          </p>
        </div>

        <p className="text-2xl text-white">Remaining Balance: {balance0?.toString()} </p>
        {remainingTimeOutput}
      </div>
    </>
  );
};
