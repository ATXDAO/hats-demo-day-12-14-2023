import { useEffect, useState } from "react";
import { useHatsClient } from "../../hooks/atx-dao/hatsHooks";
import { AllInOneHat, IAllInOneHat } from "./hat/AllInOneHat";
import { ClaimableHat, IClaimableHat } from "./hat/ClaimableHat";
import { EquippedHat, IEquippedHat } from "./hat/EquippedHat";
import { useAccount } from "wagmi";
import { HatViewData } from "~~/rep-tokens-ui-config/tokens/TokenInteractions";

const hatIds = [
  "9921260784893851876474358771529355516659303059594999436885558443376640",
  "9921260784887574774738972090765519727236095393178897081441094408863744",
  "9921260373511435444437461552023224087898469147494930673046128571711488",
];

export const Source = () => {
  const { address } = useAccount();

  const { hatsClient } = useHatsClient(5);

  const [equippedHats, setEquippedHats] = useState<IEquippedHat[]>([]);
  const [claimableHats, setClaimableHats] = useState<IClaimableHat[]>([]);
  const [allHats, setAllHats] = useState<IAllInOneHat[]>([]);
  async function getAllHats() {
    if (!address) return;

    if (!hatsClient) return;

    const hatObjs = [];

    for (let i = 0; i < hatIds.length; i++) {
      const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));

      const isWearing = await hatsClient?.isWearerOfHat({ hatId: BigInt(hatIds[i]), wearer: address });

      let membersTooltipExtra: JSX.Element = <div></div>;
      if (hatIds[i] === "9921260784893851876474358771529355516659303059594999436885558443376640") {
        membersTooltipExtra = (
          <div>
            <p>Requires 100 Reputation Tokens</p>
            <p className=" text-green-400 font-bold">
              {"Equip: Grants access to view and edit specific ATX DAO CharmVerse documents."}
            </p>
          </div>
        );
      }

      const isClaimable = await hatsClient?.accountCanClaim({
        hatId: BigInt(hatIds[i]),
        account: address,
      });

      const hatObj: IAllInOneHat = {
        hatViewData: hatViewData as HatViewData,
        hatId: hatIds[i],
        uniqueId: hatIds[i] + "-AllInOne",
        tooltipExtras: membersTooltipExtra,
        isClaimable,
        isWearing,
        onClaimed: () => {
          getWearingHats();
          getClaimableHats();
          getAllHats();
        },
      };
      hatObjs.push(hatObj);

      setAllHats([...hatObjs]);
    }
  }

  async function getClaimableHats() {
    if (!address) return;

    if (!hatsClient) return;

    const hatObjs = [];

    for (let i = 0; i < hatIds.length; i++) {
      const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));

      const isWearing = await hatsClient?.isWearerOfHat({ hatId: BigInt(hatIds[i]), wearer: address });

      let membersTooltipExtra: JSX.Element = <div></div>;
      if (hatIds[i] === "9921260784893851876474358771529355516659303059594999436885558443376640") {
        membersTooltipExtra = (
          <div>
            <p>Requires 100 Reputation Tokens</p>
            <p className=" text-green-400 font-bold">
              {"Equip: Grants access to view and edit specific ATX DAO CharmVerse documents."}
            </p>
          </div>
        );
      }

      if (!isWearing) {
        const isClaimable = await hatsClient?.accountCanClaim({
          hatId: BigInt(hatIds[i]),
          account: address,
        });

        const hatObj: IClaimableHat = {
          hatViewData: hatViewData as HatViewData,
          hatId: hatIds[i],
          uniqueId: hatIds[i] + "-Claimable",
          tooltipExtras: membersTooltipExtra,
          isClaimable,
          onClaimed: () => {
            getWearingHats();
            getClaimableHats();
            getAllHats();
          },
        };
        hatObjs.push(hatObj);
      }

      setClaimableHats([...hatObjs]);
    }
  }

  async function getWearingHats() {
    if (!address) return;

    if (!hatsClient) return;

    const hatObjs = [];

    for (let i = 0; i < hatIds.length; i++) {
      const result = await hatsClient?.isWearerOfHat({ wearer: address, hatId: BigInt(hatIds[i]) });
      if (result) {
        const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));

        let membersTooltipExtra: JSX.Element = <div></div>;
        if (hatIds[i] === "9921260784893851876474358771529355516659303059594999436885558443376640") {
          membersTooltipExtra = (
            <div>
              <p>Requires 100 Reputation Tokens</p>
              <p className=" text-green-400 font-bold">
                {"Equip: Grants access to view and edit specific ATX DAO CharmVerse documents."}
              </p>
            </div>
          );
        }

        const hatObj: IEquippedHat = {
          hatViewData: hatViewData as HatViewData,
          hatId: hatIds[i],
          uniqueId: hatIds[i] + "-Equipped",
          tooltipExtras: membersTooltipExtra,
        };
        hatObjs.push(hatObj);
      }

      setEquippedHats([...hatObjs]);
    }
  }
  useEffect(() => {
    getWearingHats();
    getClaimableHats();
    getAllHats();
  }, [hatsClient, address]);

  const listItems2 = equippedHats.map(hat => (
    <EquippedHat
      uniqueId={hat.uniqueId}
      hatId={hat.hatId}
      key={hat.hatId}
      hatViewData={hat.hatViewData}
      tooltipExtras={hat.tooltipExtras}
    ></EquippedHat>
  ));

  const listItems = claimableHats.map(hat => (
    <ClaimableHat
      uniqueId={hat.uniqueId}
      hatId={hat.hatId}
      key={hat.hatId}
      hatViewData={hat.hatViewData}
      tooltipExtras={hat.tooltipExtras}
      onClaimed={hat.onClaimed}
      isClaimable={hat.isClaimable}
    ></ClaimableHat>
  ));

  const listItems3 = allHats.map(hat => (
    <AllInOneHat
      uniqueId={hat.uniqueId}
      hatId={hat.hatId}
      key={hat.hatId}
      hatViewData={hat.hatViewData}
      tooltipExtras={hat.tooltipExtras}
      isWearing={hat.isWearing}
      onClaimed={hat.onClaimed}
      isClaimable={hat.isClaimable}
    ></AllInOneHat>
  ));

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary bg-[length:100%_100%] py-1 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
        {listItems2.length > 0 ? (
          <div>
            <p className="text-2xl text-white py-5">My Hats</p>
            <div className="flex">{listItems2}</div>
          </div>
        ) : (
          <div></div>
        )}

        <p className="text-2xl text-white py-5">Full Collection</p>
        <div className="flex">{listItems}</div>

        <p className="text-2xl text-white py-5">All Hats</p>
        <div className="flex">{listItems3}</div>
      </div>
    </>
  );
};
