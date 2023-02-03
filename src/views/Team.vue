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
              <img src="@/assets/images/Picture4.jpg" alt="">
              <span class="name">
                Oscar. G
              </span>
            </div>

            <div class="member-info">
              Graduated from UAL, and he is an atypical art student who prefers materialistic pleasures to artistic and spiritual pursuits. His infinite desires bring infinite pain, and his limited salary is overdrawn every month before he even gets his hands on it. Oscar felt that life was eating away at him, staying up late, overeating, and overworking, and even his hairline was moving back. Through Web3, Oscar hopes to meet and heal people in the same situation with the design of the pressure pig. Come on, keep it real! Is it vulgar to link art with material things?
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/Picture3.jpg" alt="">
              <span class="name">
                Steven Kim
              </span>
            </div>
            <div class="member-info">
              Graduated from the University of Sheffield as a graduate student in Marketing and Management. However, after graduation, he encountered the COVID-19 pandemic, which made this young man carry unprecedented pressure of workplace disappointment, family pressure, and social environmental oppression. By chance, he came into contact with the Web3 industry and crypto, but in a bear market, Steven watched the savings in his wallet gradually go to zero, and the pop-up messages were all about liquidation and stop losses! The accumulation of all kinds of pressure made this young man on the verge of collapse! All kinds of news are saying that the bull market is coming, and how wonderful the world is, but is it really the case? Why does he see all kinds of people full of stress, wearing masks and struggling to live? Stop wearing masks and preaching about how wonderful the world is! Wouldn't it be nice to be real and face the pressure head-on?
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/Picture6.jpg" alt="">
              <span class="name">
                Kyle. M
              </span>
            </div>
            <div class="member-info">
              Graduated from UPM and after working in the traditional industry for years, Kyle found that his career still hadn't taken off. He hated the atmosphere of the workplace - everyone was working overtime ineffectively and kissing the boss's ass. At a chance web3 party, Kyle met Oscar and Steven. The like-minded trio decided to quit their jobs and use all their savings to do this project. PPA is actually a reflection of each of us, because everyone has their own pressure! That's why we need PPA, where we understand each other, embrace each other, encourage each other, and face all kinds of stress in real life together!
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script setup>
import Header from '@/components/Header.vue';
import { onMounted, reactive } from 'vue';
import { useI18n } from '@/locales';
import { useRouter } from 'vue-router';

const t = useI18n();
const router = useRouter();

onMounted(() => {
  // document.getElementById()
});

</script>

<style lang="scss" scoped>
.video_content {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
}

.wrap {
  z-index: 100
}

.team-list {
  padding: 0 80px;
    padding-top: 90px;
    // width: 100%;
    // padding-bottom: 70px;
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
      width: 600px;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
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
