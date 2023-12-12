import { useEffect, useState } from "react";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import { PublicClient, WalletClient, usePublicClient, useWalletClient } from "wagmi";

export function useHatsClient(chainId: number) {
  const [hatsClient, setHatsClient] = useState<HatsClient>();

  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  async function getHatsClient(walletClient: WalletClient, publicClient: PublicClient, chainId: number) {
    const hatsClient = new HatsClient({
      chainId,
      publicClient,
      walletClient,
    });

    setHatsClient(hatsClient);
  }

  useEffect(() => {
    if (!walletClient) return;

    getHatsClient(walletClient, publicClient, chainId);
  }, [walletClient, publicClient, chainId]);

  return { hatsClient, getHatsClient };
}

export function useIsWearerOfHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [isWearerOfHat, setIsWearing] = useState(false);

  async function getIsWearerOfHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.isWearerOfHat({ wearer: account, hatId: BigInt(hatId) });
    setIsWearing(result);
  }

  useEffect(() => {
    getIsWearerOfHat(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { isWearerOfHat, getIsWearerOfHat };
}

export function useViewHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [properties, setProperties] = useState({
    details: "",
    maxSupply: 0,
    supply: 0,
    eligibility: "",
    toggle: "",
    imageUri: "",
    numChildren: 0,
    mutable: false,
    active: false,
  });

  async function getViewHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;
    if (!account) return;

    const properties = await hatsClient.viewHat(BigInt(hatId));

    setProperties(properties);
  }

  useEffect(() => {
    getViewHat(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { properties, getViewHat };
}

export function useAccountCanClaim(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [accountCanClaim, setAccountCanClaim] = useState(false);

  async function getAccountCanClaim(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;

    if (!account) return;

    const canClaim = await hatsClient.accountCanClaim({
      hatId: BigInt(hatId),
      account,
    });

    setAccountCanClaim(canClaim);
  }

  useEffect(() => {
    getAccountCanClaim(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { accountCanClaim, getAccountCanClaim };
}

export function useClaimHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  async function claimHat() {
    if (!hatsClient) return;
    if (!account) return;

    await hatsClient.claimHat({
      account,
      hatId: BigInt(hatId),
    });
  }

  return { claimHat };
}

// TODO://

// export function useHatsClientRead(hatsClient: HatsClient, functionName: string, args: object[]) {
//     async function clientRead(hatsClient: HatsClient, functionName: string, args: object[]) {
//         await hatsClient[functionName](args);
//     }
// }

// export function useHatsClientWrite(hatsClient: HatsClient, functionName: string, args: object[]) {
//     async function clientWrite(hatsClient: HatsClient, functionName: string, args: object[]) {
//         await hatsClient[functionName](args);
//     }
// }
