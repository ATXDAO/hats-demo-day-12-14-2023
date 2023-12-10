import { useHatsClient } from "../../hooks/atx-dao/hatsHooks";
import { AllInOneHat } from "./hat/AllInOneHat";
import { ClaimableHat } from "./hat/ClaimableHat";
import { EquippedHat } from "./hat/EquippedHat";
import { useAllInOneHats } from "./hooks/useAllInOneHats";
import { useClaimableHats } from "./hooks/useClaimableHats";
import { useEquippedHats } from "./hooks/useEquippedHats";
import { useAccount } from "wagmi";

export const globalHatIds = [
  "9921260784893851876474358771529355516659303059594999436885558443376640",
  "9921260784887574774738972090765519727236095393178897081441094408863744",
  "9921260373511435444437461552023224087898469147494930673046128571711488",
];

export const Source = () => {
  const { address } = useAccount();

  const { hatsClient } = useHatsClient(5);

  const { claimableHats, setClaimableHats } = useClaimableHats(hatsClient, address, globalHatIds);
  const { allInOneHats, setAllInOneHats } = useAllInOneHats(hatsClient, address, globalHatIds);
  const { equippedHats, setEquippedHats } = useEquippedHats(hatsClient, address, globalHatIds);

  for (let i = 0; i < claimableHats.length; i++) {
    claimableHats[i].onClaimed = async () => {
      await setEquippedHats();
      await setClaimableHats();
      await setAllInOneHats();
    };
  }

  for (let i = 0; i < allInOneHats.length; i++) {
    allInOneHats[i].onClaimed = async () => {
      await setEquippedHats();
      await setClaimableHats();
      await setAllInOneHats();
    };
  }

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

  const allInOneComponents = allInOneHats.map(hat => (
    <AllInOneHat
      uniqueId={hat.uniqueId}
      hatId={hat.hatId}
      key={hat.uniqueId}
      hatViewData={hat.hatViewData}
      tooltipExtras={hat.tooltipExtras}
      isWearing={hat.isWearing}
      onClaimed={hat.onClaimed}
      textColor={hat.textColor}
      isClaimable={hat.isClaimable}
    ></AllInOneHat>
  ));

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        {equippedHatsComponents.length > 0 ? (
          <>
            <p className="text-2xl text-white py-5">My Hats</p>
            <div className="flex">{equippedHatsComponents}</div>
          </>
        ) : (
          <div></div>
        )}

        <p className="text-2xl text-white py-5">Full Collection</p>
        <div className="flex">{claimableHatsComponents}</div>

        <p className="text-2xl text-white py-5">All Hats</p>
        <div className="flex">{allInOneComponents}</div>
      </div>
    </>
  );
};
