<template>
  <Header />
  <div class="video_content">
    <vue-danmaku v-model:danmus="danmus" useSlot randomChannel="true" debounce="1000" loop speeds="100">
      <template v-slot:dm="{ index, danmu }">
        <span :style="{color:'rgb(' + danmu.color + ')'}">{{ danmu.text }}</span>
      </template>
    </vue-danmaku>
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
import vueDanmaku from 'vue3-danmaku'

const danmus = ref([{
  text: "Illness",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Work promotion",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Marriage",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Traffic",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Noise",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Conflicts",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Loneliness",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Taxes",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Bills",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Loans",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Deadlines",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Sleep",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Alcohol",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Diet",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Pregnancy",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},
{
  text: "Injury",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Divorce",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Job loss",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Depression",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Anxiety",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Anger",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Grief",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Guilt",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
},{
  text: "Low self-esteem",
  color: Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255
}])
const t = useI18n();
const router = useRouter();
const isMute = ref(true);

const isShowLog = ref(false)
function showLog() {
  isShowLog.value = true
}
function hideLog() {
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
  top: 10vh;
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

.mask:hover {}

.vue-danmaku {
  position: absolute;
  top: 150px;
  width: 100vw;
  height: 150px;
  z-index: 100;
  opacity: 0.6;
}
</style>
