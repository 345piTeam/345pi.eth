import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	entities: [],
	loading: false,
};

const data = {
	G345: {
		abi: [
			{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "spender",
						type: "address",
					},
					{
						indexed: false,
						internalType: "uint256",
						name: "value",
						type: "uint256",
					},
				],
				name: "Approval",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "delegator",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "fromDelegate",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "toDelegate",
						type: "address",
					},
				],
				name: "DelegateChanged",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "delegate",
						type: "address",
					},
					{
						indexed: false,
						internalType: "uint256",
						name: "previousBalance",
						type: "uint256",
					},
					{
						indexed: false,
						internalType: "uint256",
						name: "newBalance",
						type: "uint256",
					},
				],
				name: "DelegateVotesChanged",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "previousOwner",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "newOwner",
						type: "address",
					},
				],
				name: "OwnershipTransferred",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "from",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "to",
						type: "address",
					},
					{
						indexed: false,
						internalType: "uint256",
						name: "value",
						type: "uint256",
					},
				],
				name: "Transfer",
				type: "event",
			},
			{
				inputs: [],
				name: "DOMAIN_SEPARATOR",
				outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "owner", type: "address" },
					{ internalType: "address", name: "spender", type: "address" },
				],
				name: "allowance",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "spender", type: "address" },
					{ internalType: "uint256", name: "amount", type: "uint256" },
				],
				name: "approve",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "account", type: "address" }],
				name: "balanceOf",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "account", type: "address" },
					{ internalType: "uint32", name: "pos", type: "uint32" },
				],
				name: "checkpoints",
				outputs: [
					{
						components: [
							{ internalType: "uint32", name: "fromBlock", type: "uint32" },
							{ internalType: "uint224", name: "votes", type: "uint224" },
						],
						internalType: "struct ERC20Votes.Checkpoint",
						name: "",
						type: "tuple",
					},
				],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "decimals",
				outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "spender", type: "address" },
					{ internalType: "uint256", name: "subtractedValue", type: "uint256" },
				],
				name: "decreaseAllowance",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "delegatee", type: "address" },
				],
				name: "delegate",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "delegatee", type: "address" },
					{ internalType: "uint256", name: "nonce", type: "uint256" },
					{ internalType: "uint256", name: "expiry", type: "uint256" },
					{ internalType: "uint8", name: "v", type: "uint8" },
					{ internalType: "bytes32", name: "r", type: "bytes32" },
					{ internalType: "bytes32", name: "s", type: "bytes32" },
				],
				name: "delegateBySig",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "account", type: "address" }],
				name: "delegates",
				outputs: [{ internalType: "address", name: "", type: "address" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "uint256", name: "blockNumber", type: "uint256" },
				],
				name: "getPastTotalSupply",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "account", type: "address" },
					{ internalType: "uint256", name: "blockNumber", type: "uint256" },
				],
				name: "getPastVotes",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "account", type: "address" }],
				name: "getVotes",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "spender", type: "address" },
					{ internalType: "uint256", name: "addedValue", type: "uint256" },
				],
				name: "increaseAllowance",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "amount", type: "uint256" },
				],
				name: "mint",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [],
				name: "name",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "owner", type: "address" }],
				name: "nonces",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "account", type: "address" }],
				name: "numCheckpoints",
				outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "owner",
				outputs: [{ internalType: "address", name: "", type: "address" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "owner", type: "address" },
					{ internalType: "address", name: "spender", type: "address" },
					{ internalType: "uint256", name: "value", type: "uint256" },
					{ internalType: "uint256", name: "deadline", type: "uint256" },
					{ internalType: "uint8", name: "v", type: "uint8" },
					{ internalType: "bytes32", name: "r", type: "bytes32" },
					{ internalType: "bytes32", name: "s", type: "bytes32" },
				],
				name: "permit",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [],
				name: "renounceOwnership",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [],
				name: "symbol",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "totalSupply",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "amount", type: "uint256" },
				],
				name: "transfer",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "from", type: "address" },
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "amount", type: "uint256" },
				],
				name: "transferFrom",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "newOwner", type: "address" },
				],
				name: "transferOwnership",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
		],
		address: "0x969c183C091fe6d8e94A862Bfeea7772e117447B",
	},
	ProposalList: {
		address: "0x3cB2cbD412B795442DCb68583fCd88115aEF2d56",
		abi: [
			{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
			{
				inputs: [
					{ internalType: "uint256", name: "propId", type: "uint256" },
					{ internalType: "string", name: "_name", type: "string" },
					{ internalType: "string", name: "_summary", type: "string" },
				],
				name: "addOption",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "string", name: "_name", type: "string" },
					{ internalType: "string", name: "_summary", type: "string" },
				],
				name: "addProposal",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [{ internalType: "uint256", name: "propId", type: "uint256" }],
				name: "getOptions",
				outputs: [
					{
						components: [
							{ internalType: "uint256", name: "id", type: "uint256" },
							{ internalType: "string", name: "name", type: "string" },
							{ internalType: "uint256", name: "voteCount", type: "uint256" },
							{ internalType: "address", name: "creator", type: "address" },
							{ internalType: "string", name: "summary", type: "string" },
						],
						internalType: "struct ProposalList.Option[]",
						name: "",
						type: "tuple[]",
					},
				],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "uint256", name: "propId", type: "uint256" }],
				name: "getProposal",
				outputs: [
					{
						components: [
							{ internalType: "uint256", name: "id", type: "uint256" },
							{ internalType: "string", name: "name", type: "string" },
							{ internalType: "address", name: "creator", type: "address" },
							{ internalType: "string", name: "summary", type: "string" },
							{ internalType: "uint256", name: "optionCount", type: "uint256" },
						],
						internalType: "struct ProposalList.Proposal",
						name: "",
						type: "tuple",
					},
				],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "propCount",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "a", type: "address" }],
				name: "setDarkLordAddress",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "uint256", name: "propIndex", type: "uint256" },
					{ internalType: "uint256", name: "index", type: "uint256" },
				],
				name: "vote",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
		],
	},
	DarkLord: {
		address: "0x36d191bd14dC5365606Fc5d1c7Bd2DDA977F7eEb",
		abi: [
			{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "approved",
						type: "address",
					},
					{
						indexed: true,
						internalType: "uint256",
						name: "tokenId",
						type: "uint256",
					},
				],
				name: "Approval",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "operator",
						type: "address",
					},
					{
						indexed: false,
						internalType: "bool",
						name: "approved",
						type: "bool",
					},
				],
				name: "ApprovalForAll",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "previousOwner",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "newOwner",
						type: "address",
					},
				],
				name: "OwnershipTransferred",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "from",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "to",
						type: "address",
					},
					{
						indexed: true,
						internalType: "uint256",
						name: "tokenId",
						type: "uint256",
					},
				],
				name: "Transfer",
				type: "event",
			},
			{
				inputs: [
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "tokenId", type: "uint256" },
				],
				name: "approve",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "owner", type: "address" }],
				name: "balanceOf",
				outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
				name: "getApproved",
				outputs: [{ internalType: "address", name: "", type: "address" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "owner", type: "address" },
					{ internalType: "address", name: "operator", type: "address" },
				],
				name: "isApprovedForAll",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "address", name: "a", type: "address" }],
				name: "isOwner",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "name",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "owner",
				outputs: [{ internalType: "address", name: "", type: "address" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
				name: "ownerOf",
				outputs: [{ internalType: "address", name: "", type: "address" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "renounceOwnership",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "string", name: "uri", type: "string" },
				],
				name: "safeMint",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "from", type: "address" },
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "tokenId", type: "uint256" },
				],
				name: "safeTransferFrom",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "from", type: "address" },
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "tokenId", type: "uint256" },
					{ internalType: "bytes", name: "_data", type: "bytes" },
				],
				name: "safeTransferFrom",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "operator", type: "address" },
					{ internalType: "bool", name: "approved", type: "bool" },
				],
				name: "setApprovalForAll",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "bytes4", name: "interfaceId", type: "bytes4" },
				],
				name: "supportsInterface",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "symbol",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
				name: "tokenURI",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "from", type: "address" },
					{ internalType: "address", name: "to", type: "address" },
					{ internalType: "uint256", name: "tokenId", type: "uint256" },
				],
				name: "transferFrom",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{ internalType: "address", name: "newOwner", type: "address" },
				],
				name: "transferOwnership",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
		],
	},
};

export const getContracts = createAsyncThunk(
	"contracts/getcontracts",
	async (thunkAPI) => {
		let response;
		try {
			response = await axios.get("/contract-data/rinkeby");
			response = response.data;
		} catch (e) {
			// fallback to built-in data for testing
			// REMOVE FOR PRODUCTION
			response = data;
		}
		return response;
	}
);

export const contractSlice = createSlice({
	name: "contracts",
	initialState,
	reducers: {},
	extraReducers: {
		[getContracts.pending]: (state) => {
			state.loading = true;
		},
		[getContracts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.entities = payload;
		},
		[getContracts.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export const selectContracts = ({ contracts }) => contracts;

export default contractSlice.reducer;
