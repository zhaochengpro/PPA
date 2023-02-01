import Web3 from 'web3';
import pressurePigAssociationAbi from '@/config/abi/PressurePigAssociation.json';

const PPA_CONTRACT_ADDRESS = import.meta.env.VITE_APP_PPA_ADDRESS

function ReadContractAbi(abiFile, contractAddress) {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abiFile, contractAddress);
  return { contract, web3, contractAddress };
}

export const PressurePigAssociationContract = () => {
  return ReadContractAbi(pressurePigAssociationAbi, PPA_CONTRACT_ADDRESS);
}
