const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');

const whitelistAddresses = require('./addresses')

const leadNodes = whitelistAddresses.addresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leadNodes, keccak256, {sortPairs: true})

const rootHash = merkleTree.getRoot();

console.log(merkleTree.toString());
console.log(rootHash);

// get proof for given address
const claimingAddress = leadNodes[0];
const hexProof = merkleTree.getHexProof(claimingAddress)
console.log(hexProof)