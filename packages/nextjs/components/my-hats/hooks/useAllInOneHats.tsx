import { useEffect, useState } from "react";
import { HatViewData } from "../HatsTypes";
import { globalHatIds } from "../Source";
import { IAllInOneHat } from "../hat/AllInOneHat";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";

export async function getAllInOneHats(hatsClient: HatsClient, address: string, hatIds: string[]) {
  const hatObjs: IAllInOneHat[] = [];

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

    const isClaimable = await hatsClient?.accountCanClaim({
      hatId: BigInt(hatIds[i]),
      account: address,
    });

    const hatObj: IAllInOneHat = {
      hatViewData: hatViewData as HatViewData,
      hatId: hatIds[i],
      uniqueId: hatIds[i] + "-AllInOne",
      tooltipExtras,
      isClaimable,
      isWearing,
      textColor,
      // onClaimed: async () => { }
    };
    hatObjs.push(hatObj);
  }

  return hatObjs;
}

export function useAllInOneHats(hatsClient: HatsClient | undefined, address: string | undefined, hatIds: string[]) {
  const [allInOneHats, set] = useState<IAllInOneHat[]>([]);
  async function setAllInOneHats() {
    if (!hatsClient) return;
    if (!address) return;

    const result = await getAllInOneHats(hatsClient, address, hatIds);
    set([...result!]);
  }

  useEffect(() => {
    if (!hatsClient) return;
    if (!address) return;

    setAllInOneHats();
  }, [hatsClient, address]);

  return { allInOneHats, setAllInOneHats };
}
