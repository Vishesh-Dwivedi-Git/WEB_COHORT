import { createPublicClient ,http } from "viem";
import {mainnet} from 'viem/chains'

const client=createPublicClient({
    chain:mainnet,
    transport:http(),
});

const blockNumber=await client.getBlockNumber();

const bal=await client.getBalance({address:""})
console.log(blockNumber);