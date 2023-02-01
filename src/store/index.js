import Vuex from 'vuex';
import web3ModalStore from './modules/web3Modal';
import userStore from './modules/user';
import PressurePigAssociationStore from '@/store/modules/PressurePigAssociation.js';

export default new Vuex.Store({
  state: {
    menuSwitch: false,
    locale: 'zh',
  },
  getters: {},
  mutations: {
    setMenuSwitch(state, data) {
      state.menuSwitch = data;
    },
    setLocale(state, data) {
      state.locale = data;
    },
  },
  actions: {},
  modules: {
    web3Modal: web3ModalStore,
    user: userStore,
    PressurePigAssociationStore: PressurePigAssociationStore
  },
});
