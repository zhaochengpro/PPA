<template>
  <Header />
  <div class="wrap">
    <div class="container">
      <div class="roadmap">
        <div class="left-avator">
          <img src="@/assets/images/Picture1.png" alt="">
        </div>
        <div class="right-scroll-view">
          <el-timeline>
            <el-timeline-item hide-timestamp size="large">
              <el-card>
                <h4>Step into the pixelated world of Toshies, a new set of NFTs created by the legendary artist
                  Chuckchee. Chuckchee is the artist behind the popular NFT collection Alpacadabraz, and has over 15
                  years of experience in the pixel art industry. With a talent for creating unique and imaginative
                  works, Chuckchee is a true master of pixelart. </h4>
              </el-card>
            </el-timeline-item>
            <el-timeline-item hide-timestamp size="large">
              <el-card>
                <h4>Step into the pixelated world of Toshies, a new set of NFTs created by the legendary artist
                  Chuckchee. Chuckchee is the artist behind the popular NFT collection Alpacadabraz, and has over 15
                  years of experience in the pixel art industry. With a talent for creating unique and imaginative
                  works, Chuckchee is a true master of pixelart. </h4>
              </el-card>
            </el-timeline-item>
            <el-timeline-item hide-timestamp size="large">
              <el-card>
                <h4>Step into the pixelated world of Toshies, a new set of NFTs created by the legendary artist
                  Chuckchee. Chuckchee is the artist behind the popular NFT collection Alpacadabraz, and has over 15
                  years of experience in the pixel art industry. With a talent for creating unique and imaginative
                  works, Chuckchee is a true master of pixelart. </h4>
              </el-card>
            </el-timeline-item>
            <el-timeline-item hide-timestamp size="large">
              <el-card>
                <h4>Step into the pixelated world of Toshies, a new set of NFTs created by the legendary artist
                  Chuckchee. Chuckchee is the artist behind the popular NFT collection Alpacadabraz, and has over 15
                  years of experience in the pixel art industry. With a talent for creating unique and imaginative
                  works, Chuckchee is a true master of pixelart. </h4>
              </el-card>
            </el-timeline-item>
          </el-timeline>
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
.roadmap {
  width: 100%;
  margin-top: 150px;
  padding: 0px 70px;
  position: relative;
  display: flex;
  justify-content: left;

  .left-avator {
    width: 400px;
    // height: 500px;
    position: relative;
    padding-bottom: 10px;
    animation: roadmap_left_anim 0.3s linear;
    img {
      position: fixed;
      width: 400px;
      // height: 500px;
      border-radius: 20px;
      border: 3px solid pink;
    }
  }

  @keyframes roadmap_left_anim {
    0%{
      left: 400px;
      opacity: 0;
    }
    100%{
      left: 0;
      opacity: 1;
    }
  }

  .el-card h4 {
    width: 50vw;
    animation: roadmap_right 0.3s linear;
  }

  @keyframes roadmap_right {
    0%{
      width: 0;
      height: 80px;
    }
    100% {
      width: 50vw;
      height: 80px;
    }
  }

  .right-scroll-view {
    margin-left: 100px;
  }

  :deep(.el-timeline-item__node--large) {
    transition: all 0.3s linear;
    background: pink;
  }

  :deep(.el-timeline-item__tail) {
    border-color: pink;
  }

  :deep(.el-timeline-item__wrapper:hover) {
    transform: scale(1.05);
  }

  :deep(.el-timeline-item__wrapper:hover .el-card) {
    background: pink;
    color: #fff;
  }

  :deep(.el-timeline-item__wrapper) {
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
}
</style>
