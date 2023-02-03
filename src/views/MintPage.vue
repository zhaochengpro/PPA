<template>
  <Header />
  <div class="video_content">
    <video loop autoplay>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="wrap">
    <div class="container">
      <div class="tab-content">
        <div class="goods-buy">
          <div class="goods-cover">
            <div class="imgbox">
              <ul>
                <li>
                  <img src="@/assets/images/picture2.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/picture3.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/picture4.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/picture5.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/picture6.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/picture2.jpg" />
                </li>
              </ul>
              
            </div>
          </div>
          <div class="goods-info">
            <div class="item goods-name">
              <h2>{{ stage == 0 ? "Already Ended" : (stage == 1 ? "WL Mint" : "Public Sale") }}</h2>
              <div class="ms" >
                Pressure Pig Association is a project on Ethereum with a total of 9,999 and a launch date of March-April 2023. More than one hundred different traits. Keep tuning for further info!
              </div>
            </div>
            <div class="item price">
              <span>{{ t("market.price") }}</span>

              <span style="position:relative;display:inline-block;">
                <span v-if="price == -1" style="display:inline-block;height:13px;width:80px">
                  <Skeleton />
                </span>
                <span v-else>
                  {{ price }} ETH
                </span>
              </span>
            </div>
            <div class="item amount">
              <span>{{ t("market.amount") }}</span>
              <div class="form-box">

                <div class="counter">
                  <button class="operation-btn" :class="{ disabled: count < 1 }" :disabled="count < 1"
                    @click="subtract">
                    -
                  </button>
                  <input type="number" v-model="count" />
                  <button class="operation-btn" :class="{ disabled: count >= surplus }" :disabled="count >= surplus"
                    @click="add">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div class="item count">
              <span>{{ t("market.count") }}</span> <span>
                {{ fixedNumber(count * price) }}
              </span>
              <button :class="status == 3 ? 'submit-btn b am disabled' : 'submit-btn b am'"
                :style="{ opacity: status === 3 || count == 0 ? '0.3' : '1' }" :disabled="status === 3 || count == 0"
                @click="count == 0 ? null : buyHandle()">
                <template v-if="status === 3">
                  <img class="loading" src="@/assets/images/loading.png" alt="" srcset="" />
                </template>
                <template v-else>
                  <span style="vertical-align:middle">{{
                    t("market.purchase")
                  }}</span>
                </template>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Message :content="content" v-model:visible="showTips" :status="messageStatus" />
  </div>
  
</template>

<script setup>
import { ref, unref, computed, onMounted, reactive, onUnmounted, watch } from 'vue';
import Header from '@/components/Header.vue';
import Skeleton from '@/components/Skeleton.vue';
import { useI18n } from '@/locales';
import { formatBuffer, fixedNumber } from '@/utils/';
import { useStore } from 'vuex';
import Message from '@/components/Message.vue';
import { caculateProof } from "@/utils/merkleProof.js";

const store = useStore();
const t = useI18n();
const status = ref(0);
const total = ref(0);
const count = ref(0);
const messageStatus = ref("");
const max = ref(0)
const showTips = ref(false);
const content = ref('');
const stage = ref(0);
const price = ref(0)
const freeMinted = ref(0);
const publicMinted = ref(0);
const account = ref("");
watch(() => store.state.web3Modal.account, (newValue) => {
  if (newValue) {
    account.value = newValue;
    init();
  }
}, { immediate: true });
const surplus = ref(0)


async function init() {
  publicMinted.value = 0;
  freeMinted.value = 0;
  total.value = 0;
  count.value = 0;
  status.value = 0;
  store.dispatch("callFreeMintStatus")
  store.dispatch("callPublicMintStatus")
}

watch(() => store.getters.getFreeMintedByAccount, (newValue) => {
  if (newValue) {
    freeMinted.value = newValue;
    surplus.value = max.value - newValue;
    console.log(surplus.value, newValue, max.value)
  }
}, { immediate: true })

watch(() => store.getters.getPublicMintedByAccount, (newValue) => {
  if (newValue) {
    publicMinted.value = newValue;
    surplus.value = max.value - newValue;
    console.log(surplus.value, newValue, max.value)
  }
}, { immediate: true })

watch(() => store.getters.getMaxPublicMintAmount, (newValue) => {
  if (newValue) {
    max.value = newValue;
    store.dispatch("callPublicMintedByAccount", { addr: unref(account) })
  }
}, { immediate: true })

watch(() => store.getters.getMaxFreeMintAmount, (newValue) => {
  if (newValue) {
    max.value = newValue
    store.dispatch("callFreeMintedByAccount", { addr: unref(account) })
  }
}, { immediate: true })

watch(() => store.getters.getFreeMintStatus, (newValue) => {
  if (newValue) {
    stage.value = 1;
    store.dispatch("callFreeMintPrice");
    store.dispatch("callMaxFreeMintAmount")

  }
}, { immediate: true })

watch(() => store.getters.getPublicMintStatus, (newValue) => {
  if (newValue) {
    stage.value = 2;
    store.dispatch("callPublicMintPrice")
    store.dispatch("callMaxPublicMintAmount")
    
  }
}, { immediate: true })

watch(() => store.getters.getFreeMintPrice, (newValue) => {
  if (newValue) {
    price.value = newValue;
  }
}, { immediate: true })

watch(() => store.getters.getPublicMintPrice, (newValue) => {
  if (newValue) {
    price.value = newValue;
  }
}, { immediate: true })

watch(() => store.getters.getMintStatus, (newValue) => {
  if (newValue) {
    status.value = newValue;
    if (newValue == 2) {
      showTips.value = true;
      messageStatus.value = "Success";
      content.value = "Mint SuccessFully"
      init();
      closeMessage();
    } else if (newValue == 1) {
      showTips.value = true;
      messageStatus.value = "Failed";
      content.value = t("market.buyFailed");
      closeMessage();
    }
  }
})


const buyHandle = async () => {
  status.value = 3;
  const params = {
    amount: count.value
  };
  

  try {
    if (isNaN(count.value)) return;

    if (stage.value == 1) {
      const proofs = caculateProof(unref(account));
      store.dispatch('callMintByWL', {
        amount: params.amount,
        proofs: proofs,
        price: (params.amount * price.value).toFixed(4)
      });
    } else if (stage.value == 2) {
      store.dispatch('callPublicMint', {
        amount: params.amount,
        price: (params.amount * price.value).toFixed(4)
      });
    }

  } catch (error) {
    status.value = 1;
    messageStatus.value = "Failed";
    content.value = data == "no enough balance" ? t("market.noEnoughValue") : data || t("market.buyFailed");
    showTips.value = true;
    closeMessage()
  }
};
function subtract() {
  if (unref(count) === 0) {
    return;
  }
  count.value--;
}
function add() {
  count.value++;
}

const closeMessage = () => {
  setTimeout(() => {
    showTips.value = false
  }, 3000)
}

</script>

<style lang="scss" scoped>
body,html {
  overflow-y: scroll;

}
.video_content {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
}
.wrap {
  z-index: 100
}
.loading {
  animation: loading 3s infinite linear;
  top: 8px;
  position: relative;
  height: 30px;
}

.container {
  height: auto;
  padding-bottom: 35px;
  background: url(../../src/assets/index.mp4);

  .tab-content {
    margin: 0 auto;
    margin-top: 150px;
  }

  .mint-left {
    width: 50%;
    padding: 200px 10px 0px;
    text-align: center;

    img {
      width: 350px;
    }
  }

  .mint-right {
    width: 50%;
    padding: 200px 160px 10px 0px;

    .mint-btn {
      padding: 5px 30px;
      font-size: 20px;
      position: relative;
      bottom: 0;
    }
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(720deg);
  }
}
</style>
