import { utils } from 'ethers';
import { PressurePigAssociationContract } from '../../utils/contract/';
import web3ModalStore from './web3Modal';

const PressurePigAssociationStore = {
  state: {
    contract: PressurePigAssociationContract().contract,
    freeMintAmount:0,
    freeMinted:0,
    publicMintAmount:0,
    publicMinted:0,
    freeMintPrice:0,
    publicMintPrice:0,
    freeMintedByAccount:0,
    publicMintedByAccount:0,
    freeMintStatus:false,
    publicMintStatus:false,
    maxFreeMintAmount:0,
    maxPublicMintAmount:0,
    mintStatus:0
  },
  mutations: {
    setContract(state, contract) {
      state.contract = contract;
    },
    setFreeMintAmount(state, amount) {
      state.freeMintAmount = amount;
    },
    setFreeMinted(state, amount) {
      state.freeMinted = amount;
    },
    setPublicMintAmount(state, amount) {
      state.publicMintAmount = amount;
    },
    setPublicMinted(state, amount) {
      state.publicMinted = amount;
    },
    setPublicMintedByAccount(state, amount) {
      state.publicMintedByAccount = amount;
    },
    setFreeMintedByAccount(state, amount) {
      state.freeMintedByAccount = amount;
    },
    setFreeMintPrice(state, price) {
      state.freeMintPrice = price;
    },
    setPublicMintPrice(state, price) {
      state.publicMintPrice = price;
    },
    setFreeMintStatus(state, status) {
      state.freeMintStatus = status;
    },
    setPublicMintStatus(state, status) {
      state.publicMintStatus = status;
    },
    setMaxPublicMintAmount(state, amount) {
      state.maxPublicMintAmount = amount;
    },
    setMaxFreeMintAmount(state, amount) {
      state.maxFreeMintAmount = amount;
    },
    setMintStatus(state, status) {
      state.mintStatus = status;
    }
  },
  actions: {
    async callFreeMintAmount({state, commit}) {
      let amount = await state.contract.methods.freeMintAmount().call();
      commit("setFreeMintAmount", amount);
    },
    async callPublicMintAmount({state, commit}) {
      let amount = await state.contract.methods.pubicMintAmount().call();
      commit("setPublicMintAmount", amount)
    },
    async callFreeMinted({state, commit}){
      let amount = await state.contract.methods.freeMinted().call();
      commit("setFreeMinted", amount)
    },
    async callPublicMinted({state, commit}) {
      let amount = await state.contract.methods.publicMinted().call();
      commit("setPublicMinted", amount)
    },
    async callFreeMintPrice({state, commit}) {
      let price = await state.contract.methods.freeMintPrice().call();
      price = utils.formatEther(price);
      commit("setFreeMintPrice", price)
    },
    async callPublicMintPrice({state, commit}) {
      let price = await state.contract.methods.publicMintPrice().call();
      price = utils.formatEther(price);
      commit("setPublicMintPrice", price)
    },
    async callPublicMintedByAccount({state, commit}, {addr}) {
      let amount = await state.contract.methods.publicMintedPerAccount(addr).call();
      commit('setPublicMintedByAccount', amount);
    },
    async callFreeMintedByAccount({state, commit}, {addr}) {
      let amount = await state.contract.methods.freeMintedPerAccount(addr).call();
      commit('setFreeMintedByAccount', amount);
    },
    async callFreeMintStatus({state, commit}) {
      let status = await state.contract.methods.freeMintStatus().call();
      commit('setFreeMintStatus', status);
    },
    async callPublicMintStatus({state, commit}) {
      let status = await state.contract.methods.publicMintStatus().call();
      commit('setPublicMintStatus', status);
    },
    async callMaxFreeMintAmount({state, commit}) {
      let amount = await state.contract.methods.maxFreeMintAmount().call();
      commit("setMaxFreeMintAmount", amount);
    },
    async callMaxPublicMintAmount({state, commit}) {
      let amount = await state.contract.methods.maxPublicMintAmount().call();
      commit("setMaxPublicMintAmount", amount);
    },
    async callMintByWL({state, commit}, {amount, proofs, price}) {
      await state.contract.methods.mintByWL(amount, proofs).send({
        from: web3ModalStore.state.account,
        value: utils.parseEther(String(price))
      },function (err, transactionHash) {
        if (err) {
          commit("setMintStatus", 1)
        }
      }).on('confirmation', function (confirmationNumber, receipt) {
        if (receipt.status) {
          commit("setMintStatus", 2)
        } else {
          commit("setMintStatus", 1)
        }
      })
    },
    async callPublicMint({state, commit}, {amount, price}) {
      await state.contract.methods.publicMint(amount).send({
        from: web3ModalStore.state.account,
        value: utils.parseEther(String(price))
      },function (err, transactionHash) {
        if (err) {
          commit("setMintStatus", 1)
        }
      }).on('confirmation', function (confirmationNumber, receipt) {
        if (receipt.status) {
          commit("setMintStatus", 2)
        } else {
          commit("setMintStatus", 1)
        }
      })
    }
  },
  getters: {
    getFreeMintAmount:(state) => state.freeMintAmount,
    getFreeMinted:(state) => state.freeMinted,
    getPublicMintAmount:(state) => state.publicMintAmount,
    getPublicMinted:(state) => state.publicMinted,
    getFreeMintPrice:(state) => state.freeMintPrice,
    getPublicMintPrice:(state) => state.publicMintPrice,
    getFreeMintedByAccount:(state) => state.freeMintedByAccount,
    getPublicMintedByAccount:(state) => state.publicMintedByAccount,
    getFreeMintStatus:(state) => state.freeMintStatus,
    getPublicMintStatus:(state) => state.publicMintStatus,
    getMaxPublicMintAmount: (state) => state.maxPublicMintAmount,
    getMaxFreeMintAmount: (state) => state.maxFreeMintAmount,
    getMintStatus: (state) => state.mintStatus
  },
};

export default PressurePigAssociationStore;
