<template>
  <Header />
  <div class="video_content">
    <video loop autoplay muted>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="wrap">
    <div class="container">
      <div class="roadmap">
        <div class="left-avator">
          <img src="@/assets/images/roadmap.png" alt="">
          <img src="@/assets/images/roadmap1.png" alt="">
          <img src="@/assets/images/roadmap2.png" alt="">
          <img src="@/assets/images/roadmap3.png" alt="">
          <img src="@/assets/images/roadmap4.png" alt="">
        </div>
        <div class="right-scroll-view">
          <div id="timeline">
            <div class="dot" id="one">
              <span></span>
              <date>1</date>
              <p>In February 2023 PPA is officially founded and we welcome all pressured souls!</p>
            </div>
            <div class="dot" id="two">
              <span></span>
              <date>2</date>
              <p>In February 2023, the "Piggy's shelter" community was established, where holders share their stresses
                and help each other relieve them through online and offline activities. "Piggy's shelter" is a safe
                place in a stressful society.</p>
            </div>
            <div class="dot" id="three">
              <span></span>
              <date>3</date>
              <p>In March-April 2023, after the PPA NFT launch, holders hold numbered 1-999 PPA NFTs will split 10% of
                the profit.</p>
            </div>
            <div class="dot" id="four">
              <span></span>
              <date>4</date>
              <p>In May 2023, establishment of PP DAO (PP DAO will select stress-related propositions and conduct
                voting).</p>
            </div>
            <div class="dot" id="five">
              <span></span>
              <date>5</date>
              <p>In August 2023, PPA-SP NFT collection airdrop(long-term holder's benefit).</p>
            </div>
            <div class="dot" id="six">
              <span></span>
              <date>6</date>
              <p>In Sep-Nov 2023, fashion brand - PPA established!</p>
            </div>
            <div class="dot" id="seven">
              <span></span>
              <date>7</date>
              <p>The PPA community will always exist in the Web3 world, and will always be there for you to face and
                relieve stress with you! PPA will never RUG!</p>
            </div>
          </div>
        </div>
        
      </div>
      <p style="text-align:center;position:absolute;bottom:10px;width:100%">Support: team@ppa-nft.xyz | <a href="#" @click="showServices" style="text-decoration:underline">Term of services</a></p>
    </div>
    
  </div>
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
import Header from '@/components/Header.vue';
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from '@/locales';
import { useRouter } from 'vue-router';
import { ElButton, ElDialog } from 'element-plus'
import { bus } from 'vue3-eventbus';

const t = useI18n();
const router = useRouter();
const visible = ref(false)

const showServices = () => {
  visible.value = true
}

const isMute = ref(false);

onMounted(() => {
  isMute.value = window.localStorage.getItem("isMute") == null ? false :  eval(window.localStorage.getItem("isMute"))
})
bus.on("toggleMute", (val) => {
  isMute.value = val;
})

</script>

<style lang="scss" scoped>
body, html{
  overflow: scroll;
}
$red: #e74c3c;
$blue : #2980b9;
$midnight : #2c3e50;
$green: #7b3;
$pink: rgb(228, 108, 180);
$yellow: rgb(228, 222, 108);
$lightGreen: rgb(117, 235, 223);

div#timeline {
  background-color: #6ab0de;
  margin-top: 50px;
  height: 10px;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 66px;

  //box-shadow: 0 0 5px rgba(0,0,0,0.2) inset;
  .inside {
    // position: absolute;
    height: 4px;
    background-color: #fff;
    width: 0%;
    top: 3px;
    left: 0;
  }

  .dot {
    position: relative;
    //box-shadow: 0 0 5px rgba(0,0,0,0.2) inset;
    z-index: 99;
    transition: 0.3s ease-in-out;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: -15px;
    text-align: center;
    cursor: pointer;

    &:nth-child(1) {
      // left: 20%;
      background-color: $midnight;
    }

    &:nth-child(2) {
      // left: 40%;
      background-color: $red;
    }

    &:nth-child(3) {
      // left: 60%;
      background-color: $green;
    }

    &:nth-child(4) {
      // left: 80%;
      background-color: darken($blue, 10%);
    }

    &:nth-child(5) {
      // left: 80%;
      background-color: darken($pink, 10%);
    }

    &:nth-child(6) {
      // left: 80%;
      background-color: darken($yellow, 10%);
    }

    &:nth-child(7) {
      // left: 80%;
      background-color: darken($lightGreen, 10%);
    }

    &:hover {
      transform: scale(1.1);
    }

    date {
      width: 84px;
      font-size: 1.1rem;
      display: block;
      position: relative;
      top: -60px;
      left: -22px;
      text-align: center;
    }

    span {
      display: inline-block;
      margin-top: 10px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      position: relative;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    p {
      width: 12vw;
      position: relative;
      left: -4vw;
    }
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

.roadmap {
  width: 100%;
  height: 780px;
  padding-top: 100px;
  position: relative;
  box-sizing: border-box;

  .left-avator {
    width: 100%;
    position: relative;
    padding-bottom: 10px;
    animation: roadmap_left_anim 0.3s linear;
    display: flex;
    justify-content: center;

    img {
      width: 18%;
      border-radius: 20px;
    }
  }

  @keyframes roadmap_left_anim {
    0% {
      left: 400px;
      opacity: 0;
    }

    100% {
      left: 0;
      opacity: 1;
    }
  }

  .el-card h4 {
    width: 50vw;
    animation: roadmap_right 0.3s linear;
  }

  @keyframes roadmap_right {
    0% {
      width: 0;
      height: 80px;
    }

    100% {
      width: 50vw;
      height: 80px;
    }
  }

  .right-scroll-view {
    // margin-left: 100px;
  }
}
</style>
