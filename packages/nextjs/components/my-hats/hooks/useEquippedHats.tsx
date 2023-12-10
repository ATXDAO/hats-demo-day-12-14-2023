import { useEffect, useState } from "react";
import { globalHatIds } from "../Source";
import { IEquippedHat } from "../hat/EquippedHat";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import { HatViewData } from "~~/rep-tokens-ui-config/tokens/TokenInteractions";

export async function getEquippedHats(hatsClient: HatsClient, address: string, hatIds: string[]) {
  const hatObjs = [];

  for (let i = 0; i < hatIds.length; i++) {
    const result = await hatsClient?.isWearerOfHat({ wearer: address, hatId: BigInt(hatIds[i]) });
    if (result) {
      const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));

      let textColor = "";

      let membersTooltipExtra: JSX.Element = <div></div>;
      if (hatIds[i] === globalHatIds[0]) {
        textColor = "#1eff00";

        membersTooltipExtra = (
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
      }

      const hatObj: IEquippedHat = {
        hatViewData: hatViewData as HatViewData,
        hatId: hatIds[i],
        uniqueId: hatIds[i] + "-Equipped",
        tooltipExtras: membersTooltipExtra,
        textColor,
      };
      hatObjs.push(hatObj);
    }
  }
  return hatObjs;
}

export function useEquippedHats(hatsClient: HatsClient | undefined, address: string | undefined, hatIds: string[]) {
  const [equippedHats, setMe] = useState<IEquippedHat[]>([]);
  async function setEquippedHats() {
    if (!hatsClient) return;
    if (!address) return;

    const result = await getEquippedHats(hatsClient, address, hatIds);
    setMe([...result!]);
  }

  useEffect(() => {
    if (!hatsClient) return;
    if (!address) return;

    setEquippedHats();
  }, [hatsClient, address]);

  return { equippedHats, setEquippedHats };
}
