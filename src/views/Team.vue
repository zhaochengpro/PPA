<template>
  <Header />
  <div class="team">
    <div class="wrap">
      <div class="container">
        <div class="team-list">
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/1.png" alt="">
              <span class="name">
                Micheal Negan
              </span>
            </div>

            <div class="member-info">
              If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.Set
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/Picture1.png" alt="">
              <span class="name">
                Micheal Negan
              </span>
            </div>
            <div class="member-info">
              If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.Set
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/1.png" alt="">
              <span class="name">
                Micheal Negan
              </span>
            </div>
            <div class="member-info">
              If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.Set
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/1.png" alt="">
              <span class="name">
                Micheal Negan
              </span>
            </div>
            <div class="member-info">
              If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.Set
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/1.png" alt="">
              <span class="name">
                Micheal Negan
              </span>
            </div>
            <div class="member-info">
              If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.Set
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.lot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
            </div>
          </div>
          <div class="item">
            <div class="avator">
              <img src="@/assets/images/1.png" alt="">
              <span class="name">
                Micheal Negan
              </span>
            </div>
            <div class="member-info">
              If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.Set
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
              the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.
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
.wrap {
  // margin-top: 150px;
}

.team-list {
  // display: flex;
  padding: 0 80px;
  margin-top: 90px;
  width: 100%;

  .item {
    opacity: 0.5;
    cursor: pointer;
    justify-content: space-between;
    position: relative;
    height: 100px;
    display: flex;
    margin-top: 70px;
    background: #ffffff26;
    padding: 30px;
    box-sizing: content-box;
    border-radius: 10px;
    transition: all 0.1s ease-in-out;

    .avator {
      // width: 100px;
      // height: 100px;
      display: flex;
      img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
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
      line-height: 100px;
      margin-left: 30px;
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
    opacity: 1;
    transform: scale(1.1);
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
