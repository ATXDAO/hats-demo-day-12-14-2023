import Image from "next/image";
import externalContracts from "../../contracts/externalContracts";
import { useClaimReputation, useGetRemainingTime } from "../../hooks/atx-dao/CadentReputationDistributorHooks";
import memberParty from "./assets/member-party.png";
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
          <p className="text-2xl text-white">
            You can claim some Reputation Tokens as a thank you for your attendance!
          </p>
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
        <Image src={memberParty} alt="Image" width="800" height="800" />
        <p className="text-2xl text-white">{"Thank you for attending ATX DAO's Membership Party."}</p>
        <p className="text-2xl text-white">Remaining Balance: {balance0?.toString()} </p>
        {remainingTimeOutput}
      </div>
    </>
  );
};
