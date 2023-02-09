<template>
  <Header />
  <div class="video_content">
    <video loop autoplay muted>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="wrap">
    <div class="container">
      <div class="tab-content">
        <div class="goods-buy">
          <div class="tab">
            <span :class="tab == 1 ? 'active' : null" @click="changeTab(1)">WL MINT</span>
            <span :class="tab == 2 ? 'active' : null" @click="changeTab(2)">PUBLIC MINT</span>
          </div>
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
          <div class="goods-info active" v-if="tab == 1">
            <div class="item goods-name">
              <h2>PPA NFT</h2>
              <div class="ms">
                Pressure Pig Association is a project on Ethereum with a total of 9,999 NFTs and a 30% Whitelist. If you're feeling stressed, Mint PPA NFTs, join Piggy's Shelter for solace! Keep tuning in for further info!
                <p>Launch date: March-April 2023</p>
              </div>
            </div>
            <div class="item price">
              <span>{{ t("market.price") }}</span>

              <span style="position:relative;display:inline-block;">
                <span v-if="price == -1" style="display:inline-block;height:13px;width:80px">
                  <Skeleton />
                </span>
                <span v-else>
                  <!-- {{ price }} ETH -->
                  TBA
                </span>
              </span>
            </div>
            <div class="item price">
              <span>Total</span>

              <span style="position:relative;display:inline-block;">
                <span v-if="price == -1" style="display:inline-block;height:13px;width:80px">
                  <Skeleton />
                </span>
                <span v-else>
                  {{freeMinted }} / {{freeMintAmount}}
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
              <span>Cost</span> <span>
                {{ fixedNumber(count * price) }}
              </span>
              <button :class="status == 3 ? 'submit-btn b am disabled' : 'submit-btn b am'"
                :style="{ opacity: status === 3 || count == 0 || (stage == 1 && !isWL ) ? '0.3' : '1' }" :disabled="status === 3 || count == 0"
                @click="count == 0 ? null : buyHandle()">
                <template v-if="status === 3">
                  <img class="loading" src="@/assets/images/loading.png" alt="" srcset="" />
                </template>
                <template v-else>
                  <span style="vertical-align:middle">{{
                    stage == 1 && !isWL ? "No eligable" : "Mint"
                  }}</span>
                </template>

              </button>
            </div>
          </div>



          <div class="goods-info active" v-else-if="tab == 2">
            <div class="item goods-name">
              <h2>PPA NFT</h2>
              <div class="ms">
                Pressure Pig Association is a project on Ethereum with a total of 9,999 NFTs and a 30% Whitelist. If you're feeling stressed, Mint PPA NFTs, join Piggy's Shelter for solace! Keep tuning in for further info!
                <p>Launch date: March-April 2023</p>
              </div>
            </div>
            <div class="item price">
              <span>{{ t("market.price") }}</span>

              <span style="position:relative;display:inline-block;">
                <span v-if="price == -1" style="display:inline-block;height:13px;width:80px">
                  <Skeleton />
                </span>
                <span v-else>
                  <!-- {{ price }} ETH -->
                  TBA
                </span>
              </span>
            </div>
            <div class="item price">
              <span>Total</span>

              <span style="position:relative;display:inline-block;">
                <span v-if="price == -1" style="display:inline-block;height:13px;width:80px">
                  <Skeleton />
                </span>
                <span v-else>
                  {{ publicMinted }} / {{ publicMintAmount }}
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
              <span>Cost</span> <span>
                {{ fixedNumber(count * price) }}
              </span>
              <button :class="status == 3 ? 'submit-btn b am disabled' : 'submit-btn b am'"
                :style="{ opacity: status === 3 || count == 0 || (stage == 1 && !isWL ) ? '0.3' : '1' }" :disabled="status === 3 || count == 0"
                @click="count == 0 ? null : buyHandle()">
                <template v-if="status === 3">
                  <img class="loading" src="@/assets/images/loading.png" alt="" srcset="" />
                </template>
                <template v-else>
                  <span style="vertical-align:middle">{{
                    stage == 1 && !isWL ? "No eligable" : "Mint"
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
  <p style="text-align:center">Support: team@ppa-nft.xyz | <a href="#" @click="showServices"
      style="text-decoration:underline">Term of services</a></p>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass" style="font-size:25px;text-align:center">Term of services</h4>
      </div>
    </template>
    <h4 style="color:#000;font-size:18px;margin:10px 0">1. Introduction to the PPA!</h4>
    Hello dear fellow PPs, welcome to the Pressure Pig Association(PPA)! PPA is a collection of 9999 characters proudly
    created by Oscar. G, Steven Kim, and Kyle. M. The intention is to use the character's appearance to resemble the
    stressful people in the modern world today, we hope to gather PPs in our community through a supportive atmosphere
    and brilliant events to unload their burden!
    Thank you so much for visiting our terms and if you have any questions feel free
    to reach out to us in the Discord or on Twitter.
    <h4 style="color:#000;font-size:18px;margin:10px 0">2. What We Own</h4>
    The name and Intellectual Property involved in the PPA Project is owned by
    the team. All rights that are not specifically granted to the users and owners
    of PPA below are reserved by the team or potential future PP DAO. This includes but is not
    limited to the intellectual property rights surrounding the images, names, logos, 3D layer files, trademarks, the
    website, the ability to mint 3D or voxel or other versions of PPA, the look and feel of the user interface, the
    smart contract code, or anything else not specifically granted by any following licenses.
    <h4 style="color:#000;font-size:18px;margin:10px 0">3. What You Own and What You Can Do With It</h4>
    By connecting your Ethereum wallet and minting an NFT with our smart contract, you have
    purchased a PPA! With this PPA you can show it off, use it as your pfp and sell it. Should you approach that number
    or expect to go beyond it, please reach out to the team on discord and we’ll discuss a licensing deal for anything
    beyond that amount.
    <h4 style="color:#000;font-size:18px;margin:10px 0">4. Specifics on Commercial and Derivative Rights</h4>
    We appreciate your desire to utilize PPA in various commercial ways, please reach out to the team and we’ll discuss
    a licensing deal for anything who is interested. User shall not use any PPA Licensed Materials in connection with
    any material, which is unlawful, fraudulent, libelous, defamatory, obscene, pornographic, profane, threatening,
    abusive, hateful, offensive or otherwise objectionable or unreasonable or infringing upon any laws or regulations or
    intellectual property rights or proprietary rights or confidentiality obligations and you shall indemnify and defend
    PPA team. against any claims, damages, proceedings, loss or costs arising from such use. User shall not use the PPA
    Licensed Materials in any way that could be construed as being adverse or derogatory to the
    image of PPA or any of its subjects featured in the NFTs.
    <h4 style="color:#000;font-size:18px;margin:10px 0">5. No Guarantees or Future Promises</h4>
    PPA hopes to put out more content and create things in the future that you can
    all be proud of and have outlined many of our intentions as such. However, the landscape
    around PP DAO and various other things we are hoping to do is shifting and legally gray in many ways. When you
    purchase your PPA, you agree that your purchase from our
    initial launch of NFTs is all you are guaranteed to receive in exchange for your funds.
    Whether through primary or secondary channels, the art is what you receive. Any future
    benefits are ancillary to this purchase and not to be taken into consideration with your
    initial purchase. You agree that you are not relying on any future commitments by
    PPA in using this site and participating in our NFT launch.
    <h4 style="color:#000;font-size:18px;margin:10px 0">6. PPA Are Not Intended as Investments</h4>
    PPA are meant to be a fun Non-Fungible Token for you to collect. They are not meant as
    investment vehicles. We make absolutely no promise or guarantee that these NFTs will be worth anything more than
    what you and the market deem the art to be worth. This could very well be zero. We give you our word that we will
    try to build a community and bring as much intangible value and vibes to the project as we can! You understand that
    they have no inherent monetary value, and they should be treated as nothing more than a collectible with potential
    future value or lack thereof.
    <h4 style="color:#000;font-size:18px;margin:10px 0">7. Taxes</h4>
    You are entirely responsible for any tax liability which may arise from minting or reselling your PPA.
    <h4 style="color:#000;font-size:18px;margin:10px 0">8. Children</h4>
    The PPA project is not targeted towards children. You agree that you are over the age of 18,
    or above the legal age of your jurisdiction, whichever is greater.
  </el-dialog>
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
import whitelist from "@/config/whitelist.json";
import { ElButton, ElDialog } from 'element-plus'
import { bus } from 'vue3-eventbus';

const store = useStore();
const visible = ref(false)
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
const freeMintedByAccount = ref(0);
const publicMintedByAccount = ref(0);
const account = ref("");
const isWL = ref(false)
watch(() => store.state.web3Modal.account, (newValue) => {
  if (newValue) {
    account.value = newValue;
    // console.log(, newValue)
    isWL.value = whitelist.includes(newValue)
    init();
  }
}, { immediate: true });
const surplus = ref(0)


async function init() {
  publicMintedByAccount.value = 0;
  freeMintedByAccount.value = 0;
  total.value = 0;
  count.value = 0;
  status.value = 0;
  store.dispatch("callFreeMintStatus")
  store.dispatch("callPublicMintStatus")
  store.dispatch("callFreeMinted")
  store.dispatch("callPublicMinted")
  store.dispatch("callFreeMintAmount")
  store.dispatch("callPublicMintAmount")
}

const freeMinted = ref(0)
const publicMinted = ref(0)
const freeMintAmount = ref(0)
const publicMintAmount = ref(0)
const isMute = ref(false);
onMounted(() => {
  isMute.value = window.localStorage.getItem("isMute") == null ? false :  eval(window.localStorage.getItem("isMute"))
})

bus.on("toggleMute", (val) => {
  isMute.value = val;
})


watch(() => store.getters.getFreeMinted, (newValue) => {
  if (newValue) {
    freeMinted.value = newValue;
  }
})

watch(() => store.getters.getPublicMinted, (newValue) => {
  if (newValue) {
    publicMinted.value = newValue;
  }
})

watch(() => store.getters.getFreeMintAmount, (newValue) => {
  if (newValue) {
    freeMintAmount.value = newValue;
  }
})

watch(() => store.getters.getPublicMintAmount, (newValue) => {
  if (newValue) {
    console.log("publicMintAmount", publicMintAmount)
    publicMintAmount.value = newValue;
  }
})


watch(() => store.getters.getFreeMintedByAccount, (newValue) => {
  if (newValue) {
    freeMintedByAccount.value = newValue;
    surplus.value = max.value - newValue;
    console.log(surplus.value, newValue, max.value)
  }
}, { immediate: true })

watch(() => store.getters.getPublicMintedByAccount, (newValue) => {
  if (newValue) {
    publicMintedByAccount.value = newValue;
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
const tab = ref(1)
const changeTab = (index) => {
  // int.value = 0;
  init()
  tab.value = index
}
const showServices = () => {
  visible.value = true
}
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
body,
html {
  overflow-y: scroll;

}


.goods-buy{
  overflow: visible;
  .tab {
    position: absolute;
    top: -50px;
    left: 50px;
    width: 300px;
    display: flex;
    justify-content: space-around;
    // transform: rotateZ(90deg);

    span {
      display: inline-block;
      height: 50px;
      background: #ccc;
      text-align: center;
      line-height: 50px;
      padding: 0px 10px;
      padding-top: 0;
      padding-bottom: 0;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }

    span.active {
      background: pink;
    }

    span:hover {
      // transform: scale(1.1);
      transform: translateX(-10px);
    }
  }
}

.goods-info.active {
  animation: switch 0.3s ease-in-out
}

@keyframes switch {
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
.video_content {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
}

.video_content video {
  height: 100vh;
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
