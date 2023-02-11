<template>
  <Header />
  <div class="video_content">
    <video loop autoplay preload="auto" id="ppa-video" muted @click="hideLog">
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>

    <audio loop id="ppa-audio">
      <source src="@/assets/bg.mp3" type="audio/mpeg" />
    </audio>

    <div class="mask" @click="showLog">
      <span class="mask-tip">Click</span>
    </div>
    
    <img class="computre_info" :class="isShowLog ? 'active' : null" src="@/assets/images/computre.jpg" alt="">
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from '@/locales';
import { useRouter } from 'vue-router';
import bus from 'vue3-eventbus'

const t = useI18n();
const router = useRouter();
const isMute = ref(true);

const isShowLog = ref(false)
function showLog() {
  isShowLog.value = true
}
function hideLog(){
  isShowLog.value = false;
}

function toAuction() {
  router.push('/auction');
}

onMounted(() => {
  // document.getElementById("ppa-video").muted = false;
  // window.localStorage.setItem("isMute", true)
  isMute.value = window.localStorage.getItem("isMute") == null ? false : eval(window.localStorage.getItem("isMute"))
  console.log("xxx", window.localStorage.getItem("isMute") == null ? false : eval(window.localStorage.getItem("isMute")))

})


function toggleAudio() {
  if (isMute.value) {
    document.getElementById("ppa-audio").play()
  } else {
    document.getElementById("ppa-audio").pause();
  }

}


bus.on("toggleMute", (val) => {
  isMute.value = val;
  console.log(val);
  if (!val) {
    document.getElementById("ppa-audio").play()
  } else {
    document.getElementById("ppa-audio").pause();
  }
})

</script>

<style lang="scss" scoped>
.mask {
  width: 220px;
  position: absolute;
  height: 270px;
  background: #ccc;
  opacity: 0.1;
  top: 35vh;
  left: 60vw;
  cursor: context-menu;
  filter: brightness(0.5);
  filter: blur(100px);
  transition: all 0.1s ease-in-out;
}

.computre_info {
  position: absolute;
  width: 0;
  top: 45vh;
  left: 70vw;
  transition: all 0.1s ease-in-out;
}

.computre_info.active {
  width: 60vw;
  top:10vh;
  left: 20vw;
}

.mask-tip {
  position: relative;
  content: "Click";
  font-size: 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  color: #000;
}

.mask:hover {
  box-shadow: -200px 0px 100px #f00;
  background: rgb(255, 0, 0);
  filter: blur(100px);
}
</style>
