import Image from "next/image";
import { useClaimReputation, useGetRemainingTime } from "../../hooks/atx-dao/CadentReputationDistributorHooks";
import memberParty from "./assets/member-party.png";
import { useAccount } from "wagmi";

export const Source = () => {
  const { address } = useAccount();

  const remainingTime = useGetRemainingTime(address);
  const claimReputation = useClaimReputation();

  let remainingTimeOutput;
  if (remainingTime !== undefined) {
    if (remainingTime.toString() > "0") {
      remainingTimeOutput = <span className="text-2xl text-white">Please check back later to redeem more tokens!</span>;
    } else {
      remainingTimeOutput = (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1"
          onClick={async () => {
            await claimReputation();
          }}
        >
          Claim 100 Tokens!
        </button>
      );
    }
  } else {
    remainingTimeOutput = <div></div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        <Image src={memberParty} alt="Image" width="800" height="800" />
        <p className="text-2xl text-white">
          Thank you for attending ATX DAOs Gala event. You can claim some Reputation Tokens as a thank you for your
          attendance!
        </p>
        <p className="text-2xl text-white">You can claim some Reputation Tokens as a thank you for your attendance!</p>
        {remainingTimeOutput}
      </div>
    </>
  );
};
