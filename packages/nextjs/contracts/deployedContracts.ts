/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    RepTokensInstance: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "ownerNominee",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "baseURI",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "BURNER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "DISTRIBUTOR_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MINTER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "TOKEN_CREATOR_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "TOKEN_MIGRATOR_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "TOKEN_UPDATER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "acceptOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "accountsByToken",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOfBatch",
          inputs: [
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "batchCreateTokens",
          inputs: [
            {
              name: "tokensProperties",
              type: "tuple[]",
              internalType: "struct TokensPropertiesStorage.TokenProperties[]",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "batchUpdateTokens",
          inputs: [
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "tokensProperties",
              type: "tuple[]",
              internalType: "struct TokensPropertiesStorage.TokenProperties[]",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createToken",
          inputs: [
            {
              name: "tokenProperty",
              type: "tuple",
              internalType: "struct TokensPropertiesStorage.TokenProperties",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "distribute",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokens",
              type: "tuple[]",
              internalType: "struct IReputationTokensInternal.TokenOperation[]",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "distributeBatch",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "batchMint",
              type: "tuple[]",
              internalType: "struct IReputationTokensInternal.BatchTokenOperation[]",
              components: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokens",
                  type: "tuple[]",
                  internalType: "struct IReputationTokensInternal.TokenOperation[]",
                  components: [
                    {
                      name: "id",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
              ],
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getDestinationWallet",
          inputs: [
            {
              name: "addr",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMaxMintPerTx",
          inputs: [
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNumOfTokenTypes",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleMember",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleMemberCount",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTokenProperties",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct TokensPropertiesStorage.TokenProperties",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "imatest",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "migrateOwnershipOfTokens",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokens",
              type: "tuple[]",
              internalType: "struct IReputationTokensInternal.TokenOperation[]",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintBatch",
          inputs: [
            {
              name: "batchMint",
              type: "tuple[]",
              internalType: "struct IReputationTokensInternal.BatchTokenOperation[]",
              components: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokens",
                  type: "tuple[]",
                  internalType: "struct IReputationTokensInternal.TokenOperation[]",
                  components: [
                    {
                      name: "id",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
              ],
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "nomineeOwner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeBatchTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "status",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDestinationWallet",
          inputs: [
            {
              name: "destination",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokensByAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalHolders",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateToken",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokenProperties",
              type: "tuple",
              internalType: "struct TokensPropertiesStorage.TokenProperties",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "uri",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BurnedRedeemable",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Create",
          inputs: [
            {
              name: "",
              type: "tuple",
              indexed: false,
              internalType: "struct TokensPropertiesStorage.TokenProperties",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "DestinationWalletSet",
          inputs: [
            {
              name: "coreAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "destination",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Distributed",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokens",
              type: "tuple[]",
              indexed: true,
              internalType: "struct IReputationTokensInternal.TokenOperation[]",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Mint",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokens",
              type: "tuple[]",
              indexed: true,
              internalType: "struct IReputationTokensInternal.TokenOperation[]",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipOfTokensMigrated",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "lifetimeBalance",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "redeemableBalance",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferBatch",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferSingle",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "URI",
          inputs: [
            {
              name: "value",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Update",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "properties",
              type: "tuple",
              indexed: true,
              internalType: "struct TokensPropertiesStorage.TokenProperties",
              components: [
                {
                  name: "isTradeable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "maxMintAmountPerTx",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ERC1155Base__ArrayLengthMismatch",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__BalanceQueryZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__BurnExceedsBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__BurnFromZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__ERC1155ReceiverNotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__ERC1155ReceiverRejected",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__MintToZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__NotOwnerOrApproved",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__SelfApproval",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__TransferExceedsBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__TransferToZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC165Base__InvalidInterfaceId",
          inputs: [],
        },
        {
          type: "error",
          name: "EnumerableSet__IndexOutOfBounds",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable__NotOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable__NotTransitiveOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "ReentrancyGuard__ReentrantCall",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__AttemptingToMintToNonDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__AttemptingToMintTooManyTokens",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__AttemptingToSendIllegalyAsDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__AttemptingToSendNonRedeemableTokens",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__AttemptingToSendToNonBurner",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__AttemptingToUpdateNonexistentToken",
          inputs: [],
        },
        {
          type: "error",
          name: "SafeOwnable__NotNomineeOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "UintUtils__InsufficientHexLength",
          inputs: [],
        },
      ],
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
