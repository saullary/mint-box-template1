/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ERC1155SingleBoxWrapperInterface extends ethers.utils.Interface {
  functions: {
    "tokens(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;

  events: {
    "AddToken(uint256,address,string,uint256)": EventFragment;
    "MintToken(address,uint256,uint256)": EventFragment;
    "UpdateSupply(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateSupply"): EventFragment;
}

export type AddTokenEvent = TypedEvent<
  [BigNumber, string, string, BigNumber] & {
    tokenId: BigNumber;
    creator: string;
    uri: string;
    supply: BigNumber;
  }
>;

export type MintTokenEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    to: string;
    tokenId: BigNumber;
    amount: BigNumber;
  }
>;

export type UpdateSupplyEvent = TypedEvent<
  [BigNumber, BigNumber] & { tokenId: BigNumber; supply: BigNumber }
>;

export class ERC1155SingleBoxWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ERC1155SingleBoxWrapperInterface;

  functions: {
    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, string, string, BigNumber] & {
        id: BigNumber;
        status: number;
        creator: string;
        uri: string;
        supply: BigNumber;
      }
    >;
  };

  tokens(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, string, string, BigNumber] & {
      id: BigNumber;
      status: number;
      creator: string;
      uri: string;
      supply: BigNumber;
    }
  >;

  callStatic: {
    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, string, string, BigNumber] & {
        id: BigNumber;
        status: number;
        creator: string;
        uri: string;
        supply: BigNumber;
      }
    >;
  };

  filters: {
    "AddToken(uint256,address,string,uint256)"(
      tokenId?: null,
      creator?: null,
      uri?: null,
      supply?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      { tokenId: BigNumber; creator: string; uri: string; supply: BigNumber }
    >;

    AddToken(
      tokenId?: null,
      creator?: null,
      uri?: null,
      supply?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      { tokenId: BigNumber; creator: string; uri: string; supply: BigNumber }
    >;

    "MintToken(address,uint256,uint256)"(
      to?: string | null,
      tokenId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { to: string; tokenId: BigNumber; amount: BigNumber }
    >;

    MintToken(
      to?: string | null,
      tokenId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { to: string; tokenId: BigNumber; amount: BigNumber }
    >;

    "UpdateSupply(uint256,uint256)"(
      tokenId?: null,
      supply?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { tokenId: BigNumber; supply: BigNumber }
    >;

    UpdateSupply(
      tokenId?: null,
      supply?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { tokenId: BigNumber; supply: BigNumber }
    >;
  };

  estimateGas: {
    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
