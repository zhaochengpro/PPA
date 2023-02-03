<template>
  <Header />
  <div class="video_content">
    <video loop autoplay>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="wrap">
    <div class="container">
      <div class="roadmap">
        <div class="left-avator">
          <img src="@/assets/images/Picture2.jpg" alt="">
          <img src="@/assets/images/Picture3.jpg" alt="">
          <img src="@/assets/images/Picture4.jpg" alt="">
          <img src="@/assets/images/Picture5.jpg" alt="">
          <img src="@/assets/images/Picture6.jpg" alt="">
        </div>
        <div class="right-scroll-view">
          <div id="timeline">
            <div class="dot" id="one">
              <span></span>
              <date>Step One</date>
              <p>In February 2023 PPA is officially founded and we welcome all pressured souls!</p>
            </div>
            <div class="dot" id="two">
              <span></span>
              <date>Step Two</date>
              <p>In February 2023, the "Piggy's shelter" community was established, where holders share their stresses
                and help each other relieve them through online and offline activities. "Piggy's shelter" is a safe
                place in a stressful society.</p>
            </div>
            <div class="dot" id="three">
              <span></span>
              <date>Step Three</date>
              <p>In March - April 2023, PPA NFT launch, Holders holds numbered 1-999 PPA NFTs split the profits!</p>
            </div>
            <div class="dot" id="four">
              <span></span>
              <date>Step Four</date>
              <p>In May 2023, establishment of PP DAO (PP DAO will select stress-related propositions and conduct
                voting).</p>
            </div>
            <div class="dot" id="five">
              <span></span>
              <date>Step Five</date>
              <p>In August 2023, PPA-SP NFT collection airdrop(long-term holder's benefit).</p>
            </div>
            <div class="dot" id="six">
              <span></span>
              <date>Step Six</date>
              <p>In Sep-Nov 2023, fashion brand - PPA established!</p>
            </div>
            <div class="dot" id="seven">
              <span></span>
              <date>Step Seven</date>
              <p>The PPA community will always exist in the Web3 world, and will always be there for you to face and
                relieve stress with you! PPA will never RUG!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import { useI18n } from '@/locales';
import { useRouter } from 'vue-router';

const t = useI18n();
const router = useRouter();

</script>

<style lang="scss" scoped>
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
      width: 13vw;
      position: relative;
      left: -70px;
    }
  }
}

.video_content {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
}

.wrap {
  z-index: 100
}

.roadmap {
  width: 100%;
    height: 100vh;
    padding-top: 100px;
    position: relative;
    box-sizing: border-box;

  .left-avator {
    width: 100%;
    position: relative;
    padding-bottom: 10px;
    animation: roadmap_left_anim 0.3s linear;
    display: flex;

    img {
      width: 20%;
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
