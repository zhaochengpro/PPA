<template>
  <Header />
  <div class="video_content">
    <video loop autoplay muted>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="web-main">
    <div class="faq">
      <div class="wrap">
        <!-- <div class="container">
          
        </div> -->
        <div class="accordion">
          <div class="column-card" :class="{ active: activeCard === 0 }" :key="0" @click.prevent="cardChange(0)">
            <div class="title">{{ t("faq.explain1") }}</div>
            <div class="content">
              <p>{{ t("faq.explain1_1") }}</p>
              <p>{{ t("faq.explain1_2") }}</p>
              <p>{{ t("faq.explain1_3") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 0 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 1 }" :key="0" @click.prevent="cardChange(1)">
            <div class="title">{{ t("faq.explain2") }}</div>
            <div class="content">
              <p>{{ t("faq.explain2_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 1 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 2 }" :key="0" @click.prevent="cardChange(2)">
            <div class="title">{{ t("faq.explain3") }}</div>
            <div class="content">
              <p>{{ t("faq.explain3_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 2 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 3 }" :key="0" @click.prevent="cardChange(3)">
            <div class="title">{{ t("faq.explain4") }}</div>
            <div class="content">
              <p>{{ t("faq.explain4_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 3 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>

          <div class="column-card" :class="{ active: activeCard === 4 }" :key="0" @click.prevent="cardChange(4)">
            <div class="title">{{ t("faq.explain5") }}</div>
            <div class="content">
              <p>{{ t("faq.explain5_1") }}</p>
              
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 4 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>

          <div class="column-card" :class="{ active: activeCard === 5 }" :key="0" @click.prevent="cardChange(5)">
            <div class="title">{{ t("faq.explain6") }}</div>
            <div class="content">
              <p>{{ t("faq.explain6_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 5 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 6 }" :key="0" @click.prevent="cardChange(6)">
            <div class="title">{{ t("faq.explain7") }}</div>
            <div class="content">
              <p>{{ t("faq.explain7_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 6 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 7 }" :key="0" @click.prevent="cardChange(7)">
            <div class="title">{{ t("faq.explain8") }}</div>
            <div class="content">
              <p>{{ t("faq.explain8_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 7 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 8 }" :key="0" @click.prevent="cardChange(8)">
            <div class="title">{{ t("faq.explain9") }}</div>
            <div class="content">
              <p>{{ t("faq.explain9_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 8 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 9 }" :key="0" @click.prevent="cardChange(9)">
            <div class="title">{{ t("faq.explain10") }}</div>
            <div class="content">
              <p>{{ t("faq.explain10_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 9 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 10 }" :key="0" @click.prevent="cardChange(10)">
            <div class="title">{{ t("faq.explain11") }}</div>
            <div class="content">
              <p>{{ t("faq.explain11_1") }}</p>
              <p>{{ t("faq.explain11_2") }}</p>
              <p>{{ t("faq.explain11_3") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 10 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p style="text-align:center;margin-top:10px">Support: team@ppa-nft.xyz | <a href="#"  @click="showServices" style="text-decoration:underline">Term of services</a></p>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{  titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass"  style="font-size:25px;text-align:center">Term of services</h4>
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
import { onMounted, ref } from 'vue';
import Header from '@/components/Header.vue';
import { useI18n } from '@/locales';
import { ElButton, ElDialog } from 'element-plus'
import { bus } from 'vue3-eventbus';

const t = useI18n();
const activeCard = ref(-1);
const cards = [];
const visible = ref(false)

function cardChange(index) {
  if (activeCard.value == index) {
    activeCard.value = -1;
  } else {
    activeCard.value = index;
  }

}

const isMute = ref(false)

onMounted(() => {
  isMute.value = window.localStorage.getItem("isMute") == null ? false :  eval(window.localStorage.getItem("isMute"))
})

bus.on("toggleMute", (val) => {
  isMute.value = val;
})

const showServices = () => {
  visible.value = true
}
</script>

<style lang="scss" scoped>

:deep(html, body) {
  overflow: scroll!important;;
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
  width: 90vw;
  z-index: 100;
  // margin: 0;
  padding: 0;
  padding-top: 100px;
  // overflow-y: scroll;
}
.faq {
  padding: 0;
}


.accordion {
  height: 80vh;
  box-sizing: content-box;
  overflow-y: scroll;
}
</style>
