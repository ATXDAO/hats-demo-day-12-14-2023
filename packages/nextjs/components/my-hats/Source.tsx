import { useHatsClient } from "../../hooks/atx-dao/hatsHooks";
// import { AllInOneHat } from "./hat/AllInOneHat";
import { ClaimableHat } from "./hat/ClaimableHat";
import { EquippedHat } from "./hat/EquippedHat";
// import { useAllInOneHats } from "./hooks/useAllInOneHats";
import { useClaimableHats } from "./hooks/useClaimableHats";
import { useEquippedHats } from "./hooks/useEquippedHats";
import { useAccount } from "wagmi";
import { usePublicClient, useWalletClient } from "wagmi";

export const globalHatIds = [
  "9921260784893851876474358771529355516659303059594999436885558443376640",
  "9921260784887574774738972090765519727236095393178897081441094408863744",
  "9921260373511435444437461552023224087898469147494930673046128571711488",
];

export const Source = () => {
  const { address: account } = useAccount();

  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { hatsClient } = useHatsClient(5, publicClient, walletClient!);

  const {
    claimableHats,
    isLoading: isLoadingClaimables,
    setClaimableHats,
  } = useClaimableHats(hatsClient, account, globalHatIds);
  // const { allInOneHats, setAllInOneHats } = useAllInOneHats(hatsClient, address, globalHatIds);
  const {
    equippedHats,
    isLoading: isLoadingEquippables,
    setEquippedHats,
  } = useEquippedHats(hatsClient, account, globalHatIds);

  for (let i = 0; i < claimableHats.length; i++) {
    claimableHats[i].onClaimed = async () => {
      if (!account) {
        return;
      }

      await hatsClient?.claimHat({ account, hatId: BigInt(claimableHats[i].hatId) });
      await setEquippedHats();
      await setClaimableHats();
      // await setAllInOneHats();
    };
  }

  // for (let i = 0; i < allInOneHats.length; i++) {
  //   allInOneHats[i].onClaimed = async () => {

  //     if (!account) {
  //       return;
  //     }

  //     await hatsClient?.claimHat({ account, hatId: BigInt(claimableHats[i].hatId) });
  //     await setEquippedHats();
  //     await setClaimableHats();
  //     await setAllInOneHats();
  //   };
  // }

  const equippedHatsComponents = equippedHats.map(hat => (
    <EquippedHat
      uniqueId={hat.uniqueId}
      hatId={hat.hatId}
      key={hat.uniqueId}
      hatViewData={hat.hatViewData}
      tooltipExtras={hat.tooltipExtras}
      textColor={hat.textColor}
    ></EquippedHat>
  ));

  const claimableHatsComponents = claimableHats.map(hat => (
    <ClaimableHat
      uniqueId={hat.uniqueId}
      hatId={hat.hatId}
      key={hat.uniqueId}
      hatViewData={hat.hatViewData}
      tooltipExtras={hat.tooltipExtras}
      onClaimed={hat.onClaimed}
      textColor={hat.textColor}
      isClaimable={hat.isClaimable}
    ></ClaimableHat>
  ));

  // const allInOneComponents = allInOneHats.map(hat => (
  //   <AllInOneHat
  //     uniqueId={hat.uniqueId}
  //     hatId={hat.hatId}
  //     key={hat.uniqueId}
  //     hatViewData={hat.hatViewData}
  //     tooltipExtras={hat.tooltipExtras}
  //     isWearing={hat.isWearing}
  //     onClaimed={hat.onClaimed}
  //     textColor={hat.textColor}
  //     isClaimable={hat.isClaimable}
  //   ></AllInOneHat>
  // ));

  let equippedHatsOutput = <div></div>;

  if (equippedHatsComponents.length > 0) {
    equippedHatsOutput = (
      <>
        <p className="text-2xl text-white py-5">My Hats</p>
        <div className="flex">{equippedHatsComponents}</div>

        <p className="text-2xl text-white py-5">Full Collection</p>
        <div className="flex">{claimableHatsComponents}</div>
      </>
    );
  } else {
    equippedHatsOutput = (
      <>
        <p className="text-2xl text-white py-5">Full Collection</p>
        <div className="flex">{claimableHatsComponents}</div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        {isLoadingClaimables && isLoadingEquippables ? (
          <p className="text-2xl text-white py-5">Loading Hats...</p>
        ) : (
          <>{equippedHatsOutput}</>
        )}

        {/* 
        <p className="text-2xl text-white py-5">All Hats</p>
        <div className="flex">{allInOneComponents}</div> */}
      </div>
    </>
  );
};
