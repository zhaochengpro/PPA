import {MerkleTree} from "merkletreejs";
import keccak256 from "keccak256";
import whitelist from "@/config/whitelist.json";

export function caculateProof(account) {
  const merkleTree = new MerkleTree(whitelist, keccak256, { hashLeaves: true, sortPairs: true });
  const leaf = keccak256(account);
  const proofs = merkleTree.getHexProof(leaf);
  return proofs;
}