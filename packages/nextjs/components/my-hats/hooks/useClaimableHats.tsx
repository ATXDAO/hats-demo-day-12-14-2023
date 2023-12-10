import { useEffect, useState } from "react";
import { globalHatIds } from "../Source";
import { IClaimableHat } from "../hat/ClaimableHat";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import { HatViewData } from "~~/rep-tokens-ui-config/tokens/TokenInteractions";

export async function getClaimableHats(hatsClient: HatsClient, address: string, hatIds: string[]) {
  const hatObjs: IClaimableHat[] = [];

  for (let i = 0; i < hatIds.length; i++) {
    const hatViewData = await hatsClient?.viewHat(BigInt(hatIds[i]));
    const isWearing = await hatsClient?.isWearerOfHat({ hatId: BigInt(hatIds[i]), wearer: address });

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
        textColor,
      };
      hatObjs.push(hatObj);
    }
  }

  return hatObjs;
}

export function useClaimableHats(hatsClient: HatsClient | undefined, address: string | undefined, hatIds: string[]) {
  const [claimableHats, set] = useState<IClaimableHat[]>([]);
  async function setClaimableHats() {
    if (!hatsClient) return;
    if (!address) return;

    const result = await getClaimableHats(hatsClient, address, hatIds);
    set([...result!]);
  }

  useEffect(() => {
    if (!hatsClient) return;
    if (!address) return;

    setClaimableHats();
  }, [hatsClient, address, setClaimableHats]);

  return { claimableHats, setClaimableHats };
}
