<template>
  <div class="web-header">
    <div class="wrap">
      <div class="central">
        <router-link to="/" class="logo" @click="changeMenuSwitch(false)">
          <img src="@/assets/images/logo.png" alt="">
        </router-link>
        <div class="nav">
          <ul class="nav-menu">
            <li v-for="item in options" :key="item.to">
              <router-link :to="item.to" active-class="high" @click="changeMenuSwitch(false)">
                {{ t(item.field) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="tools-bar">
        <ul class="options">
          <li><a class="link0" target="_blank" href="http://discord.gg/eNvVKBYE48"></a></li>
          <li><a class="link1" target="_blank" href="https://twitter.com/PressurePig"></a></li>
          <li><a class="link2" href="#"></a></li>
          <li><a class="link3" href="#"></a></li>
        </ul>

        <a class="wallet-btn am" href="#" v-if="!isConnected" @click="connect">
          {{ t('header.connectWallet') }}
        </a>
        <a class="wallet-btn am" href="#" v-else @click="disconnect">
          {{ formatAccount(account, 6, 4) }}
        </a>
      </div>

      <!-- menu-switch -->
      <a v-show="!menuSwitch" class="menu-switch-btn menu-btn" href="#" @click.prevent="changeMenuSwitch(true)">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.333333 256V170.666667h853.333334v85.333333H85.333333z m0 597.333333v-85.333333h853.333334v85.333333H85.333333z m0-298.666666v-85.333334h853.333334v85.333334H85.333333z">
          </path>
        </svg>
      </a>
      <a v-show="menuSwitch" class="menu-switch-btn close-btn" href="#" @click.prevent="changeMenuSwitch(false)">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2282" width="200"
          height="200">
          <path
            d="M453.44 512L161.472 220.032a41.408 41.408 0 0 1 58.56-58.56L512 453.44 803.968 161.472a41.408 41.408 0 0 1 58.56 58.56L570.56 512l291.968 291.968a41.408 41.408 0 0 1-58.56 58.56L512 570.56 220.032 862.528a41.408 41.408 0 0 1-58.56-58.56L453.44 512z">
          </path>
        </svg>
      </a>
      <!--移动端菜单控制按钮，点击此按钮切，给web-container添加或移除class：“active-menu-m”-->
    </div>
  </div>

  <Web3ModalComponent ref="web3modal" :theme="theme" :provider-options="providerOptions" cache-provider />

  <template>

  </template>
  <template v-if="inviterVisible">
    <div class="masker"></div>
    <div class="default-popu pop-invite">
      <!---关闭弹窗添加class “invisible”即可，同时将div“masker” 设置“display:none”--->
      <!-- <a class="close-btn am" href="#"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M557.311759 513.248864l265.280473-263.904314c12.54369-12.480043 12.607338-32.704421 0.127295-45.248112-12.512727-12.576374-32.704421-12.607338-45.248112-0.127295L512.127295 467.904421 249.088241 204.063755c-12.447359-12.480043-32.704421-12.54369-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.280796l262.975407 263.775299-265.151458 263.744335c-12.54369 12.480043-12.607338 32.704421-0.127295 45.248112 6.239161 6.271845 14.463432 9.440452 22.687703 9.440452 8.160624 0 16.319527-3.103239 22.560409-9.311437l265.216826-263.807983 265.440452 266.240344c6.239161 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.311759 513.248864z">
          </path>
        </svg></a> -->
      <div class="popu-content">
        <div class="invite">
          <h4 class="pop-h4">{{ t("header.inviterTip") }}</h4>
          <div class="form-box">
            <div class="form-row">
              <div class="form-element">
                <input class="form-field small" :placeholder="t('header.inviterAddress')" type="text"
                  v-model="inviterAccount" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-element" style="padding-top: 8px;">
                <button class="form-submit-btn inline-block am disabled" @click.prevent="submitInviter">{{
                  t("header.submit")
                }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </template>

  <img class="mute-icon" :src="isMute ? Mute : noMute" @click="toggleMute" alt="">

</template>

<script setup>
import { Web3ModalComponent } from 'web3modal-vue3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useStore } from 'vuex';
import { computed, nextTick, watch, onMounted, ref, unref } from 'vue';
import { changeLocale, useI18n } from '@/locales';
import { getQueryVariable, formatAccount } from "@/utils";
import noMute from "@/assets/images/nomute.png"
import Mute from "@/assets/images/mute.png"
import bus from 'vue3-eventbus'
const t = useI18n();
const messageStatus = ref("")
const store = useStore();
const options = [
  { field: 'Mint', to: '/mint' },
  { field: 'Roadmap', to: '/roadmap' },
  { field: 'Team', to: '/team' },
  { field: 'FAQs', to: '/fqa' },
];
const showTips = ref(false);
const content = ref('');
const web3modal = ref(null);
const theme = ref('dark');
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: import.meta.env.VITE_APP_INFURA_KEY,
    },
  },
};
const localeOptions = [
  {
    label: 'EN',
    value: 'en',
  }
];
const activeLocale = ref('zh');
const menuSwitch = ref(false);
const inviterVisible = ref(false);
let inviterAccount = ref('');
const isMute = ref(true);
const account = computed(() => store.state.web3Modal.account);
const isConnected = computed(() => store.getters.isConnected);
const curLocale = computed(() => {
  let ret = null;
  localeOptions.forEach((item) => {
    if (item.value === unref(activeLocale)) {
      ret = item;
    }
  });
  return ret;
});


onMounted(() => {
  activeLocale.value = localStorage.getItem('language') || 'en';

  nextTick(async () => {
    store.commit('setWeb3Modal', web3modal.value);
    if (web3modal.value.cachedProvider() == "injected") {
      connect();
    }
  });
});

const disconnect = () => {
  store.dispatch('resetApp');
};

const connect = () => {
  store.dispatch('connect');
};

function changeLocaleHandle(value) {
  activeLocale.value = value;
  changeLocale(value);
  store.commit('setLocale', value);
}

function changeMenuSwitch(data) {
  menuSwitch.value = data;
  store.commit('setMenuSwitch', data);
}

function toggleMute() {
  isMute.value = !isMute.value
  bus.emit('toggleMute', isMute.value)
}

</script>

<style lang="scss" scoped>
.high {
  color: pink;
}

.tips-box {
  .label {
    font-size: 24px;
    margin-bottom: 1rem;
  }

  input {
    display: block;
    width: 100%;
    height: 32px;
    color: #fff;
    border: 1px solid #2c2c2e;
    background: none;
    padding: 0 10px 0 10px;
  }
}

.mute-icon {
  z-index: 1000;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 30px;
  cursor: pointer;
}
</style>
