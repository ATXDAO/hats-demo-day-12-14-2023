import { useEffect, useState } from "react";
import { HatViewData } from "../HatsTypes";
import { globalHatIds } from "../Source";
import { IClaimableHat } from "../hat/ClaimableHat";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";

export async function getClaimableHats(hatsClient: HatsClient, address: string, hatIds: string[]) {
  const hatObjs: IClaimableHat[] = [];

  for (let i = 0; i < hatIds.length; i++) {
    const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));
    const isWearing = await hatsClient?.isWearerOfHat({ hatId: BigInt(hatIds[i]), wearer: address });

    let textColor = "";

    let tooltipExtras: JSX.Element = <div></div>;
    if (hatIds[i] === globalHatIds[0]) {
      textColor = "#1eff00";

      tooltipExtras = (
        <div>
          <p>Requires 100 Reputation Tokens</p>
          <p className=" text-green-400 font-bold">
            {"Equip: Grants access to view and edit specific ATX DAO CharmVerse documents."}
          </p>
        </div>
      );
    } else if (hatIds[i] === globalHatIds[1]) {
      textColor = "#0070dd";
    } else if (hatIds[i] === globalHatIds[2]) {
      textColor = "#a335ee";

      tooltipExtras = (
        <div>
          <p className=" text-green-400 font-bold">{"Equip: Gain the sudden weight of owning a DAO."}</p>
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
        tooltipExtras,
        isClaimable,
        textColor,
      };
      hatObjs.push(hatObj);
    }
  }

  return hatObjs;
}

export function useClaimableHats(hatsClient: HatsClient | undefined, address: string | undefined, hatIds: string[]) {
  const [claimableHats, set] = useState<IClaimableHat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function setClaimableHats() {
    if (!hatsClient) return;
    if (!address) return;

    setIsLoading(true);
    const result = await getClaimableHats(hatsClient, address, hatIds);
    set([...result!]);
    console.log("Set 2!");

    setIsLoading(false);
  }

  useEffect(() => {
    if (!hatsClient) return;
    if (!address) return;

    setClaimableHats();
  }, [hatsClient, address]);

  return { claimableHats, isLoading, setClaimableHats };
}
