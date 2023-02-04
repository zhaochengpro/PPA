<template>
  <Header />
  <div class="video_content">
    <video loop autoplay>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="team">
    <div class="container">
      <div class="team-list">
        <div class="item">
          <div class="avator">
            <img src="@/assets/images/picture4.jpg" alt="">
            <span class="name">
              Oscar. G
            </span>
          </div>

          <div class="member-info">
            Graduated from UAL, and he is an atypical art student who prefers materialistic pleasures to artistic and
            spiritual pursuits. His infinite desires bring infinite pain, and his limited salary is overdrawn every
            month before he even gets his hands on it. Oscar felt that life was eating away at him, staying up late,
            overeating, and overworking, and even his hairline was moving back. Through Web3, Oscar hopes to meet and
            heal people in the same situation with the design of the pressure pig. Come on, keep it real! Is it vulgar
            to link art with material things?
          </div>
        </div>
        <div class="item">
          <div class="avator">
            <img src="@/assets/images/picture3.jpg" alt="">
            <span class="name">
              Steven Kim
            </span>
          </div>
          <div class="member-info">
            Graduated from the University of Sheffield as a graduate student in Marketing and Management. However, after
            graduation, he encountered the COVID-19 pandemic, which made this young man carry unprecedented pressure of
            workplace disappointment, family pressure, and social environmental oppression. By chance, he came into
            contact with the Web3 industry and crypto, but in a bear market, Steven watched the savings in his wallet
            gradually go to zero, and the pop-up messages were all about liquidation and stop losses! The accumulation
            of all kinds of pressure made this young man on the verge of collapse! All kinds of news are saying that the
            bull market is coming, and how wonderful the world is, but is it really the case? Why does he see all kinds
            of people full of stress, wearing masks and struggling to live? Stop wearing masks and preaching about how
            wonderful the world is! Wouldn't it be nice to be real and face the pressure head-on?
          </div>
        </div>
        <div class="item">
          <div class="avator">
            <img src="@/assets/images/picture6.jpg" alt="">
            <span class="name">
              Kyle. M
            </span>
          </div>
          <div class="member-info">
            Graduated from UPM and after working in the traditional industry for years, Kyle found that his career still
            hadn't taken off. He hated the atmosphere of the workplace - everyone was working overtime ineffectively and
            kissing the boss's ass. At a chance web3 party, Kyle met Oscar and Steven. The like-minded trio decided to
            quit their jobs and use all their savings to do this project. PPA is actually a reflection of each of us,
            because everyone has their own pressure! That's why we need PPA, where we understand each other, embrace
            each other, encourage each other, and face all kinds of stress in real life together!
          </div>
        </div>
      </div>
    </div>
  </div>
  <p style="text-align:center;margin-top:20px">Support: team@ppa-nft.xyz | <a href="#" @click="showServices"
      style="text-decoration:underline">Term of services</a></p>
      <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
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
import { CircleCloseFilled } from '@element-plus/icons-vue'

const t = useI18n();
const router = useRouter();
const visible = ref(false)
onMounted(() => {
  // document.getElementById()
});

const showServices = () => {
  visible.value = true
}

</script>

<style lang="scss" scoped>
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

.team-list {
  padding: 0 80px;
  padding-top: 90px;
  height: 80vh;
  overflow-y: scroll;
  box-sizing: content-box;

  .item {
    // opacity: 0.5;
    cursor: pointer;
    justify-content: space-between;
    position: relative;
    // height: 100px;
    display: flex;
    margin-top: 20px;
    background: #ffffff26;
    padding: 13px 51px;
    box-sizing: content-box;
    border-radius: 10px;
    transition: all 0.1s ease-in-out;

    .avator {
      img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        vertical-align: middle;
      }
    }

    .member-info {
      position: relative;
      width: 900px;
      display: inline-block;
      overflow: hidden;
      text-align: justify;
      padding: 60px 0px;
    }

    // .member-info::after {
    //   content: '';
    //   width: 10px;
    //   height: 20px;
    //   background-color: #FFF;
    //   z-index: 2;
    //   position: absolute;
    //   animation: blink 0.1s 0.3s step-end infinite,
    //     moveCursor 0.3s steps(12) forwards;
    // }

    .name {
      text-align: center;
      display: block;
      opacity: 0.6;
    }

    // .member-info::before {
    //   content: '';
    //   width: 100%;
    //   height: 50px;
    //   z-index: 1;
    //   position: absolute;
    //   background: linear-gradient(#fff, #fff) no-repeat top right;
    //   animation: showText 0.1s steps(12) forwards;
    // }


    /* 光标闪烁动画 */
    @keyframes blink {
      0% {
        background-color: #fff;
      }

      50% {
        background-color: transparent;
      }

      100% {
        background-color: #fff;
      }
    }

    /* 光标闪烁动画 */
    @keyframes showWidth {
      0% {
        width: 0px;
      }

      100% {
        width: 600px;
      }
    }

    /* 光标移动动画 */
    @keyframes moveCursor {
      0% {
        left: 0%;
      }

      100% {
        left: 100%;
      }
    }

    /* 背景移动动画 */
    @keyframes showText {
      0% {
        background-size: 100% 100%;
      }

      100% {
        background-size: 0% 100%;
      }
    }
  }

  .item:hover {
    opacity: 0.8;
    background: #fff;
    transform: scale(1.05);
    color: #000;
  }

  .item:nth-of-type(2n + 1) {
    animation: initMove1 0.3s ease-in-out;
  }

  .item:nth-of-type(2n) {
    flex-direction: row-reverse;
    // left: 2000px;
    animation: initMove 0.3s ease-in-out;
  }

  @keyframes initMove {
    0% {
      left: 2000px;
    }

    100% {
      left: 0px;
    }
  }

  @keyframes initMove1 {
    0% {
      left: -2000px;
    }

    100% {
      left: 0px;
    }
  }

}
</style>
