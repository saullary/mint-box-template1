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
	Overrides,
	CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ERC721SingleCollectionFactoryInterface
	extends ethers.utils.Interface {
	functions: {
		"deploy(address,string,string,string,address,address,address,bytes32,(address,uint256,uint64,uint64,string))": FunctionFragment;
		"getAddress(address,string,string,string,address,address,address,bytes32,(address,uint256,uint64,uint64,string))": FunctionFragment;
		"getByteCode(address,string,string,string,address,address,address,(address,uint256,uint64,uint64,string))": FunctionFragment;
		"getData(address,string,string,string,address,(address,uint256,uint64,uint64,string))": FunctionFragment;
	};

	encodeFunctionData(
		functionFragment: "deploy",
		values: [
			string,
			string,
			string,
			string,
			string,
			string,
			string,
			BytesLike,
			{
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			}
		]
	): string;
	encodeFunctionData(
		functionFragment: "getAddress",
		values: [
			string,
			string,
			string,
			string,
			string,
			string,
			string,
			BytesLike,
			{
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			}
		]
	): string;
	encodeFunctionData(
		functionFragment: "getByteCode",
		values: [
			string,
			string,
			string,
			string,
			string,
			string,
			string,
			{
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			}
		]
	): string;
	encodeFunctionData(
		functionFragment: "getData",
		values: [
			string,
			string,
			string,
			string,
			string,
			{
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			}
		]
	): string;

	decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "getByteCode",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;

	events: {
		"Deployed(address,address,string,string,string,address,address,address,bytes32,tuple)": EventFragment;
	};

	getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
}

export type DeployedEvent = TypedEvent<
	[
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		[string, BigNumber, BigNumber, BigNumber, string] & {
			payToken: string;
			price: BigNumber;
			open: BigNumber;
			close: BigNumber;
			uri: string;
		}
	] & {
		proxy: string;
		owner: string;
		name: string;
		symbol: string;
		uri: string;
		creator: string;
		imp: string;
		admin: string;
		salt: string;
		param: [string, BigNumber, BigNumber, BigNumber, string] & {
			payToken: string;
			price: BigNumber;
			open: BigNumber;
			close: BigNumber;
			uri: string;
		};
	}
>;

export class ERC721SingleCollectionFactory extends BaseContract {
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

	interface: ERC721SingleCollectionFactoryInterface;

	functions: {
		deploy(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		getAddress(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<[string]>;

		getByteCode(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<[string]>;

		getData(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<[string]>;
	};

	deploy(
		owner: string,
		name: string,
		symbol: string,
		uri: string,
		creator: string,
		imp: string,
		admin: string,
		salt: BytesLike,
		param: {
			payToken: string;
			price: BigNumberish;
			open: BigNumberish;
			close: BigNumberish;
			uri: string;
		},
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	getAddress(
		owner: string,
		name: string,
		symbol: string,
		uri: string,
		creator: string,
		imp: string,
		admin: string,
		salt: BytesLike,
		param: {
			payToken: string;
			price: BigNumberish;
			open: BigNumberish;
			close: BigNumberish;
			uri: string;
		},
		overrides?: CallOverrides
	): Promise<string>;

	getByteCode(
		owner: string,
		name: string,
		symbol: string,
		uri: string,
		creator: string,
		imp: string,
		admin: string,
		param: {
			payToken: string;
			price: BigNumberish;
			open: BigNumberish;
			close: BigNumberish;
			uri: string;
		},
		overrides?: CallOverrides
	): Promise<string>;

	getData(
		owner: string,
		name: string,
		symbol: string,
		uri: string,
		creator: string,
		param: {
			payToken: string;
			price: BigNumberish;
			open: BigNumberish;
			close: BigNumberish;
			uri: string;
		},
		overrides?: CallOverrides
	): Promise<string>;

	callStatic: {
		deploy(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<string>;

		getAddress(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<string>;

		getByteCode(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<string>;

		getData(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<string>;
	};

	filters: {
		"Deployed(address,address,string,string,string,address,address,address,bytes32,tuple)"(
			proxy?: string | null,
			owner?: null,
			name?: null,
			symbol?: null,
			uri?: null,
			creator?: null,
			imp?: null,
			admin?: null,
			salt?: null,
			param?: null
		): TypedEventFilter<
			[
				string,
				string,
				string,
				string,
				string,
				string,
				string,
				string,
				string,
				[string, BigNumber, BigNumber, BigNumber, string] & {
					payToken: string;
					price: BigNumber;
					open: BigNumber;
					close: BigNumber;
					uri: string;
				}
			],
			{
				proxy: string;
				owner: string;
				name: string;
				symbol: string;
				uri: string;
				creator: string;
				imp: string;
				admin: string;
				salt: string;
				param: [string, BigNumber, BigNumber, BigNumber, string] & {
					payToken: string;
					price: BigNumber;
					open: BigNumber;
					close: BigNumber;
					uri: string;
				};
			}
		>;

		Deployed(
			proxy?: string | null,
			owner?: null,
			name?: null,
			symbol?: null,
			uri?: null,
			creator?: null,
			imp?: null,
			admin?: null,
			salt?: null,
			param?: null
		): TypedEventFilter<
			[
				string,
				string,
				string,
				string,
				string,
				string,
				string,
				string,
				string,
				[string, BigNumber, BigNumber, BigNumber, string] & {
					payToken: string;
					price: BigNumber;
					open: BigNumber;
					close: BigNumber;
					uri: string;
				}
			],
			{
				proxy: string;
				owner: string;
				name: string;
				symbol: string;
				uri: string;
				creator: string;
				imp: string;
				admin: string;
				salt: string;
				param: [string, BigNumber, BigNumber, BigNumber, string] & {
					payToken: string;
					price: BigNumber;
					open: BigNumber;
					close: BigNumber;
					uri: string;
				};
			}
		>;
	};

	estimateGas: {
		deploy(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		getAddress(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<BigNumber>;

		getByteCode(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<BigNumber>;

		getData(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<BigNumber>;
	};

	populateTransaction: {
		deploy(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		getAddress(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			salt: BytesLike,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		getByteCode(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			imp: string,
			admin: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		getData(
			owner: string,
			name: string,
			symbol: string,
			uri: string,
			creator: string,
			param: {
				payToken: string;
				price: BigNumberish;
				open: BigNumberish;
				close: BigNumberish;
				uri: string;
			},
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;
	};
}
