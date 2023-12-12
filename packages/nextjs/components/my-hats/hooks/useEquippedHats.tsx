import { useEffect, useState } from "react";
import { HatViewData } from "../HatsTypes";
import { globalHatIds } from "../Source";
import { IEquippedHat } from "../hat/EquippedHat";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";

export async function getEquippedHats(hatsClient: HatsClient, address: string, hatIds: string[]) {
  const hatObjs = [];

  for (let i = 0; i < hatIds.length; i++) {
    const result = await hatsClient?.isWearerOfHat({ wearer: address, hatId: BigInt(hatIds[i]) });
    if (!result) continue;

    const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));

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

    const hatObj: IEquippedHat = {
      hatViewData: hatViewData as HatViewData,
      hatId: hatIds[i],
      uniqueId: hatIds[i] + "-Equipped",
      tooltipExtras,
      textColor,
    };
    hatObjs.push(hatObj);
  }
  return hatObjs;
}

export function useEquippedHats(hatsClient: HatsClient | undefined, address: string | undefined, hatIds: string[]) {
  const [equippedHats, setMe] = useState<IEquippedHat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function setEquippedHats() {
    if (!hatsClient) return;
    if (!address) return;

    setIsLoading(true);
    const result = await getEquippedHats(hatsClient, address, hatIds);
    setMe([...result!]);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!hatsClient) return;
    if (!address) return;

    setEquippedHats();
  }, [hatsClient, address]);

  return { equippedHats, isLoading, setEquippedHats };
}
