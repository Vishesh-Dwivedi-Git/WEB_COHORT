import {Keypair} from "@solana/web3.js";
import nacl from "tweetnacl";
//generate a new keypar
const keypair=Keypair.generate();

//extract public and private key

const publicKey= keypair.publicKey.toString();
const secretKey=keypair.secretKey;

//display the keys
console.log("public key",publicKey);
console.log("private key (secret key)",secretKey);

//convert the message to uint8array
const mess="transfer 50 to jnrna03920";

const message=new TextEncoder().encode(mess);
const signature=nacl.sign.detached(message,secretKey);
const result=nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes(),
);

console.log(result);



