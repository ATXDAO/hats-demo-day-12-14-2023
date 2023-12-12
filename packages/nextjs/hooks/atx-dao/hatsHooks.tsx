import { useEffect, useState } from "react";
import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import type {
  /*MintHatResult, RenounceHatResult, ChangeHatDetailsResult, ChangeHatEligibilityResult, ChangeHatToggleResult, ChangeHatImageURIResult, ChangeHatMaxSupplyResult, MakeHatImmutableResult, , SetHatStatusResult, TransferHatResult, SetHatWearerStatusResult, CheckHatStatusResult, CheckHatWearerStatusResult, RequestLinkTopHatToTreeResult, */
  ApproveLinkTopHatToTreeResult,
  /*CreateHatResult, MintTopHatResult, */
  BatchCreateHatsResult,
  BatchMintHatsResult,
  /*UnlinkTopHatFromTreeResult, RelinkTopHatWithinTreeResult, MultiCallResult, */
  ClaimResult,
} from "@hatsprotocol/sdk-v1-core/dist/types";
import { PublicClient, WalletClient } from "wagmi";

//Initialization Functions

export function useHatsClient(chainId: number, publicClient: PublicClient, walletClient: WalletClient) {
  const [hatsClient, setHatsClient] = useState<HatsClient>();

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

//Read Functions

export function useAccountCanClaim(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [data, setData] = useState(false);

  async function getData(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.accountCanClaim({
      hatId: BigInt(hatId),
      account,
    });

    setData(result);
  }

  useEffect(() => {
    getData(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { data, getData };
}

export function useCanClaimForAccount(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [data, setData] = useState(false);

  async function getData(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.canClaimForAccount({
      hatId: BigInt(hatId),
      account,
    });

    setData(result);
  }

  useEffect(() => {
    getData(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { data, getData };
}

export function useIsWearerOfHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [data, setData] = useState(false);

  async function getData(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.isWearerOfHat({ wearer: account, hatId: BigInt(hatId) });
    setData(result);
  }

  useEffect(() => {
    getData(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { data, getData };
}

export function useViewHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [data, setData] = useState({
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

  async function getData(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.viewHat(BigInt(hatId));
    setData(result);
  }

  useEffect(() => {
    getData(hatsClient, hatId, account);
  }, [hatsClient, account, hatId]);

  return { data, getData };
}

//Write Functions

export function useApproveLinkTopHatToTree(
  hatsClient: HatsClient | undefined,
  account: string | undefined,
  topHatDomain: number,
  newAdminHat: bigint,
  newEligibility: string | undefined,
  newToggle: string | undefined,
  newDetails: string | undefined,
  newImageURI: string | undefined,
) {
  const [data, setData] = useState<ApproveLinkTopHatToTreeResult>();

  async function writeAsync() {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.approveLinkTopHatToTree({
      account,
      topHatDomain,
      newAdminHat,
      newEligibility,
      newToggle,
      newDetails,
      newImageURI,
    });
    setData(result);
  }

  return { data, writeAsync };
}

export function useBatchClaimHats(
  hatsClient: HatsClient | undefined,
  account: string | undefined,
  admins: bigint[],
  details: string[],
  maxSupplies: number[],
  eligibilityModules: string[],
  toggleModules: string[],
  mutables: boolean[],
  imageURIs?: string[] | undefined,
) {
  const [data, setData] = useState<BatchCreateHatsResult>();

  async function writeAsync() {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.batchCreateHats({
      account,
      admins,
      details,
      maxSupplies,
      eligibilityModules,
      toggleModules,
      mutables,
      imageURIs,
    });
    setData(result);
  }

  return { data, writeAsync };
}

export function useBatchMintHats(
  hatsClient: HatsClient | undefined,
  account: string | undefined,
  hatIds: bigint[],
  wearers: string[],
) {
  const [data, setData] = useState<BatchMintHatsResult>();

  async function writeAsync() {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.batchMintHats({ account, hatIds, wearers });
    setData(result);
  }

  return { data, writeAsync };
}

export function useClaimHat(hatsClient: HatsClient | undefined, hatId: string, account: string | undefined) {
  const [data, setData] = useState<ClaimResult>();

  async function writeAsync() {
    if (!hatsClient) return;
    if (!account) return;

    const result = await hatsClient.claimHat({ account, hatId: BigInt(hatId) });
    setData(result);
  }

  return { data, writeAsync };
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
