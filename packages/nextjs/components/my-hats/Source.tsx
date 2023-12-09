import { useClaimHat, useHatsCanClaim, useHatsClient } from "../../hooks/atx-dao/hatsHooks";
import { useAccount } from "wagmi";

const hatId = "9921260784893851876474358771529355516659303059594999436885558443376640";

export const Source = () => {
  const { address } = useAccount();

  const { hatsClient } = useHatsClient(5);
  const { canClaim, getCanClaim } = useHatsCanClaim(hatsClient, hatId, address);
  const { claimHat } = useClaimHat(hatsClient, hatId, address);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        <p className="text-2xl text-white">Hats Demo Day</p>
        {canClaim ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl text-white">You have enough Reputation to claim a Member Hat!</p>
            <p className="text-2xl text-white">{"You have enough Reputation to claim a [Member Hat]!"}</p>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1"
              onClick={async () => {
                await claimHat();
                await getCanClaim(hatsClient, hatId, address);
              }}
            >
              Claim Member Hat!
            </button>
          </div>
        ) : (
          <div>
            <p className="text-white">Your ATX DAO Hats</p>
            {/* <Image
              src={memberParty}
              alt={"Image"}
              width={800}
              height={800}
            /> */}
          </div>
        )}
      </div>
    </>
  );
};
